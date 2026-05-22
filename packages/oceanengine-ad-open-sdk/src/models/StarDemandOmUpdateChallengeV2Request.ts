// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarDemandOmUpdateChallengeV2RequestChallengeInfo, StarDemandOmUpdateChallengeV2RequestDemandInfo } from "../models";

export interface StarDemandOmUpdateChallengeV2Request {
  challenge_info: StarDemandOmUpdateChallengeV2RequestChallengeInfo;
  challenge_task_id: number | string;
  demand_info: StarDemandOmUpdateChallengeV2RequestDemandInfo;
  developer_id?: string;
  star_id: number | string;
}

