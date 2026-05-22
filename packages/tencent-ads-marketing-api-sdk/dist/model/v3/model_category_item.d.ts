import type { CategoryPathsItem } from "../v3/index";
export interface CategoryItem {
    category_id?: number | string;
    category_name?: string;
    parent_category_id?: number | string;
    level?: number;
    category_path?: CategoryPathsItem[];
}
