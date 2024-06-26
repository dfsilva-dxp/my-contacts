import { ICategoriesDataSource } from "@/domain/data/ICategoriesDataSource";

type Dependencies = {
  readonly categoriesDataSource: ICategoriesDataSource;
};

export const categoriesRepository = ({
  categoriesDataSource
}: Dependencies) => {
  const get = () => categoriesDataSource.getAll();

  return { get };
};
