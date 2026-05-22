// Generated from oceanengine/ad_open_sdk_go models/model_yuntu_audience_label_create_v3_0_request_calculate_rule_item_filters.go
// Do not edit manually.

import type { YuntuAudienceLabelCreateV30CalculateRuleItemFiltersContentTypeList, YuntuAudienceLabelCreateV30CalculateRuleItemFiltersMatchType, YuntuAudienceLabelCreateV30CalculateRuleItemFiltersOnlySelfBrand } from "../models/index";

export interface YuntuAudienceLabelCreateV30RequestCalculateRuleItemFilters {
  content_type_list?: YuntuAudienceLabelCreateV30CalculateRuleItemFiltersContentTypeList[];
  ecom_categories?: string[];
  match_type: YuntuAudienceLabelCreateV30CalculateRuleItemFiltersMatchType;
  max_price?: number;
  min_price?: number;
  only_self_brand?: YuntuAudienceLabelCreateV30CalculateRuleItemFiltersOnlySelfBrand;
}

