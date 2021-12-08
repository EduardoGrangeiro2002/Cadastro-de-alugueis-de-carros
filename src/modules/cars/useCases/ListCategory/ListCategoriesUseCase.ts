import { Category } from "../../model/Category";
import { ICategoryRepositoryInterface } from "../../repositories/ICategoriesRepositoryInterface";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepositoryInterface) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
