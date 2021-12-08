import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const AllListCategories = this.listCategoriesUseCase.execute();

    return response.json(AllListCategories);
  }
}

export { ListCategoryController };
