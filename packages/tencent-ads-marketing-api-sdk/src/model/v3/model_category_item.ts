// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_category_item.go
// Do not edit manually.

import type { CategoryPathsItem } from "../v3/index";

export interface CategoryItem {
  category_id?: number | string;
  category_name?: string;
  parent_category_id?: number | string;
  level?: number;
  category_path?: CategoryPathsItem[];
}

