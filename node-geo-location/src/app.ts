import express from "express";
import cors from "cors";
import bodyPaser from "body-parser";

import { geolocationRoutes } from "./route/geolocation.route";

const app = express();

//middlewares
app.use(cors());
app.use(bodyPaser.json());

//routes
app.use(geolocationRoutes);

export {
	app
};