import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoryController };
