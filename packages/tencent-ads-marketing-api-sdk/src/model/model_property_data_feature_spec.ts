// Generated from tencentad/marketing-api-go-sdk pkg/model/model_property_data_feature_spec.go
// Do not edit manually.

import type { FeatureValueDataType } from "../model/index";

export interface PropertyDataFeatureSpec {
  user_property_set_id?: number | string;
  property_data_key?: string;
  data_type?: FeatureValueDataType;
  is_multi_valued?: boolean;
  possible_values_size?: number;
}

