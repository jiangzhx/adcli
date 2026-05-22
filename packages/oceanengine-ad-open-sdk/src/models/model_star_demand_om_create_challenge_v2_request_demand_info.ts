// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_om_create_challenge_v2_request_demand_info.go
// Do not edit manually.

import type { StarDemandOmCreateChallengeV2RequestDemandInfoAdSyncConf } from "../models/index";

export interface StarDemandOmCreateChallengeV2RequestDemandInfo {
  ad_sync_conf?: StarDemandOmCreateChallengeV2RequestDemandInfoAdSyncConf;
  attatchments_url?: string[];
  demand_name: string;
  expiration_time?: number;
  expiration_time_end: number;
}

