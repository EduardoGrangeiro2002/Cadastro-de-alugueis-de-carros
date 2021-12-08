import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificatiosRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error("Specification already exist");
    }
    this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
