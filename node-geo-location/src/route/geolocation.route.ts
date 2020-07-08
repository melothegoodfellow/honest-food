import express, { Request, Response } from "express";
import { GeolocationController } from "../controller/geolocation.controller";

const geolocationRoutes = express.Router();
const geolocationController = new GeolocationController();

geolocationRoutes.get("/geo-location", (req: Request, resp: Response) => {
	let long = parseFloat(req.query.long as string);
	let lat = parseFloat(req.query.lat as string);
	const outlet_identifier = geolocationController.checkGeolocation(long, lat);
	resp.json({
		"outlet_identifier": outlet_identifier
	});
});

export {
	geolocationRoutes
}