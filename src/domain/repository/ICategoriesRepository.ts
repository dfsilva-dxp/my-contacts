import { Category } from "../model/Categories";

export interface ICategoriesRepository {
  get: () => Promise<Category[]>;
}
