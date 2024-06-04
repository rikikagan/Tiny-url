import express from "express";
import LinksController from "../Controllers/LinksController.js";

const LinkRouter = express.Router();

LinkRouter.get("/", LinksController.getList);
LinkRouter.get("/:id", LinksController.getById);
LinkRouter.get("/redirect/:id", LinksController.redirect);
LinkRouter.get("/clicks/:id", LinksController.getLinkClicks);
// LinkRouter.get("/clicks/source/:id", LinksController.getClicksBySource); 
LinkRouter.post("/", LinksController.addLink);
LinkRouter.put("/:id", LinksController.update);
LinkRouter.delete("/:id", LinksController.delete);

export default LinkRouter;
