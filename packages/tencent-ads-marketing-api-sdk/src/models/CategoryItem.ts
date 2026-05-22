// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CategoryPathsItem } from "../models";

export interface CategoryItem {
  category_id?: number | string;
  category_name?: string;
  parent_category_id?: number | string;
  level?: number;
  category_path?: CategoryPathsItem[];
}

