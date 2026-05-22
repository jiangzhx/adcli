// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_create_assign_v2_request_demand_info_component_info.go
// Do not edit manually.

import type { StarDemandCreateAssignV2RequestDemandInfoComponentInfoCommentComponentInfo, StarDemandCreateAssignV2RequestDemandInfoComponentInfoEcomCartInner } from "../models/index";

export interface StarDemandCreateAssignV2RequestDemandInfoComponentInfo {
  cocreate_douyin_id?: string;
  comment_component_info?: StarDemandCreateAssignV2RequestDemandInfoComponentInfoCommentComponentInfo;
  common_component_ids?: (number | string)[];
  ecom_cart?: StarDemandCreateAssignV2RequestDemandInfoComponentInfoEcomCartInner[];
  industry_component_id?: number | string;
  link_component_ids?: (number | string)[];
  live_attract_component_id?: number | string;
  search_word?: string;
}

