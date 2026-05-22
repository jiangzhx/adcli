// Generated from tencentad/marketing-api-go-sdk pkg/model/model_estimation_get_request.go
// Do not edit manually.

import type { AdgroupSetting, CampaignTargeting, CreativeStruct, EstimationReadTargetingSetting, EstimationSceneTargeting } from "../model/index";

export interface EstimationGetRequest {
  campaign_spec?: CampaignTargeting;
  scene_spec?: EstimationSceneTargeting;
  account_id?: number | string;
  adcreative?: CreativeStruct[];
  targeting?: EstimationReadTargetingSetting;
  adgroup?: AdgroupSetting;
}

