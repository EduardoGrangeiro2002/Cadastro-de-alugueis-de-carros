import { Response, Request } from "express";

import { CreateCategoryUseCases } from "./CreateCategoryUseCases";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCases) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
