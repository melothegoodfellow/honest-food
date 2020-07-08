import { Request } from "express";
import { point, polygon, booleanPointInPolygon} from "@turf/turf";

import geoPolygons from "../assets/geo-polygon.json";

export class GeolocationController {

	public checkGeolocation = (long: number, lat: number) => {
		let pt = point([long, lat]);

		let outlet_identifier = "not found";
 		geoPolygons.features.map((geoPolygon: any) => {
 			if(geoPolygon.geometry.type === "Polygon"
 				&& booleanPointInPolygon(pt, polygon(geoPolygon.geometry.coordinates))){
 				outlet_identifier = geoPolygon.properties.Name;
 			}
 		});
 		return outlet_identifier;
	}
}