// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_location_rule.go
// Do not edit manually.

import type { AreaSpec, CustomLocationDateRange, FrequencySpec, LbsPoiType } from "../model/index";

export interface CustomLocationRule {
  poi_type?: LbsPoiType;
  date_range?: CustomLocationDateRange;
  frequency_spec?: FrequencySpec;
  area_list?: AreaSpec[];
}

