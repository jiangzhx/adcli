// Generated from tencentad/marketing-api-go-sdk pkg/model/model_poi_rule.go
// Do not edit manually.

import type { DateRange } from "../model/index";

export interface PoiRule {
  region_id?: number | string[];
  poi_category_id?: number | string[];
  date_range?: DateRange;
  day_of_week?: string[];
  frequency?: number;
}

