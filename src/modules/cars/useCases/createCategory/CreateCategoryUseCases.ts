import { ICategoryRepositoryInterface } from "../../repositories/ICategoriesRepositoryInterface";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCases {
  constructor(private categoriesRepository: ICategoryRepositoryInterface) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ description, name });
  }
}

export { CreateCategoryUseCases };
