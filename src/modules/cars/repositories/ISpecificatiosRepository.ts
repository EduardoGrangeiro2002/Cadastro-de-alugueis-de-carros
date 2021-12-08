import { Specification } from "../model/Specification";

interface ICreateSpecificatiosDTO {
  name: string;
  description: string;
}

interface ISpecificatiosRepository {
  create({ name, description }: ICreateSpecificatiosDTO): void;

  findByName(name: string): Specification;

  list(): Specification[];
}

export { ISpecificatiosRepository, ICreateSpecificatiosDTO };
