import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const AllList = this.listSpecificationUseCase.execute();

    return response.json(AllList);
  }
}

export { ListSpecificationController };
