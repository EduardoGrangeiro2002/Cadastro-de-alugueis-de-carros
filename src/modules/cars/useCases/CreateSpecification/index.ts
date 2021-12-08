import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const specificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const SpecificationController = new CreateSpecificationController(
  specificationUseCase
);

export { SpecificationController };
