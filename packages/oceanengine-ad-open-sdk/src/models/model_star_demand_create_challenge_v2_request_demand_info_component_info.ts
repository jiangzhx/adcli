// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_create_challenge_v2_request_demand_info_component_info.go
// Do not edit manually.

import type { StarDemandCreateChallengeV2RequestDemandInfoComponentInfoEcomCartInner, StarDemandCreateChallengeV2RequestDemandInfoComponentInfoPaidContentComponent } from "../models/index";

export interface StarDemandCreateChallengeV2RequestDemandInfoComponentInfo {
  common_component_ids?: number | string[];
  ecom_cart?: StarDemandCreateChallengeV2RequestDemandInfoComponentInfoEcomCartInner[];
  industry_component_id?: number | string;
  link_component_ids?: number | string[];
  live_attract_component_id?: number | string;
  paid_content_component?: StarDemandCreateChallengeV2RequestDemandInfoComponentInfoPaidContentComponent;
}

