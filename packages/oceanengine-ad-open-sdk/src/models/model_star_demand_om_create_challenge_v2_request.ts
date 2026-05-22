// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_om_create_challenge_v2_request.go
// Do not edit manually.

import type { StarDemandOmCreateChallengeV2RequestChallengeInfo, StarDemandOmCreateChallengeV2RequestDemandInfo } from "../models/index";

export interface StarDemandOmCreateChallengeV2Request {
  challenge_info: StarDemandOmCreateChallengeV2RequestChallengeInfo;
  demand_info: StarDemandOmCreateChallengeV2RequestDemandInfo;
  developer_id?: number | string;
  star_id: number | string;
}

