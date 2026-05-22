// Generated from tencentad/marketing-api-go-sdk pkg/model/model_lbs_spec.go
// Do not edit manually.

import type { CrossCityRule, CustomLocationRule, LbsType, PoiRule } from "../model/index";

export interface LbsSpec {
  lbs_type?: LbsType;
  cross_city_rule?: CrossCityRule;
  poi_rule?: PoiRule;
  custom_location_rule?: CustomLocationRule;
}

