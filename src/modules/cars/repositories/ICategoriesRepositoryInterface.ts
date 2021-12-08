import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositoryInterface {
  findByName(name: string): Category;

  create({ name, description }: ICreateCategoryDTO): void;

  list(): Category[];
}

export { ICategoryRepositoryInterface, ICreateCategoryDTO };
