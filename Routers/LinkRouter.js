import express from "express";
import LinksController from "../Controlers/linkController.js";

const LinksRouter = express.Router();

LinksRouter.get("/", LinksController.getList);
LinksRouter.get("/:id", LinksController.getById);
LinksRouter.get("/redirect/:id", LinksController.redirect);
LinksRouter.get("/clicks/:id", LinksController.getLinkClicks);
// LinksRouter.get("/clicks/source/:id", LinksController.getClicksBySource); 
LinksRouter.post("/", LinksController.addLink);
LinksRouter.put("/:id", LinksController.update);
LinksRouter.delete("/:id", LinksController.delete);

export default LinksRouter;
