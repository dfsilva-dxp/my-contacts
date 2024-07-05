import { Category } from "@/domain/model/Categories";
import { UseCase } from "@/domain/model/types";
import { ICategoriesRepository } from "@/domain/repository/ICategoriesRepository";

type Dependencies = {
  readonly categoriesRepository: ICategoriesRepository;
};

export const getCategoriesUseCase = ({
  categoriesRepository
}: Dependencies): UseCase<Category[]> => ({
  execute: () => categoriesRepository.get()
});
