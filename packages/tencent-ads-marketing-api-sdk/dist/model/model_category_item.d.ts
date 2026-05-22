import type { CategoryPathsItem } from "../model/index";
export interface CategoryItem {
    category_id?: number | string;
    category_name?: string;
    parent_category_id?: number | string;
    level?: number;
    category_path?: CategoryPathsItem[];
}
