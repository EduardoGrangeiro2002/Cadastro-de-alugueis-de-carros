import { Router } from "express";

import { SpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/ListSpecification";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
  return SpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRouter };
