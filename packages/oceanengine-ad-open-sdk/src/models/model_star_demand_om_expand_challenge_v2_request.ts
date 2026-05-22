// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_om_expand_challenge_v2_request.go
// Do not edit manually.

import type { StarDemandOmExpandChallengeV2RequestOmParticipateAuthorRange } from "../models/index";

export interface StarDemandOmExpandChallengeV2Request {
  challenge_end_time?: number;
  challenge_task_id: number | string;
  developer_id?: number | string;
  om_participate_author_range?: StarDemandOmExpandChallengeV2RequestOmParticipateAuthorRange;
  star_id: number | string;
}

