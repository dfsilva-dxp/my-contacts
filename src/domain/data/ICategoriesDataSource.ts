import { Category } from "../model/Categories";

export type ICategoriesDataSource = {
  readonly getAll: () => Promise<Category[]>;
};
