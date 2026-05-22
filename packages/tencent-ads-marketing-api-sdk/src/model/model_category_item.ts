// Generated from tencentad/marketing-api-go-sdk pkg/model/model_category_item.go
// Do not edit manually.

import type { CategoryPathsItem } from "../model/index";

export interface CategoryItem {
  category_id?: number | string;
  category_name?: string;
  parent_category_id?: number | string;
  level?: number;
  category_path?: CategoryPathsItem[];
}

