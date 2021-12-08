import { Specification } from "../../model/Specification";
import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificatiosRepository) {}
  execute(): Specification[] {
    const ListSpecification = this.specificationRepository.list();

    return ListSpecification;
  }
}

export { ListSpecificationUseCase };
