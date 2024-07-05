import { Category } from "@/domain/model/Categories";

import { axios } from "@/utils/common/services/axiosInstace";
import { PATHS } from "@/utils/common/constant/paths";

export async function getAll(): Promise<Category[]> {
  const { data } = await axios.get<Category[]>(PATHS.CATEGORIES);
  return data;
}
