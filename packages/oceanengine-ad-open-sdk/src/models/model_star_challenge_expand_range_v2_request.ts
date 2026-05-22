// Generated from oceanengine/ad_open_sdk_go models/model_star_challenge_expand_range_v2_request.go
// Do not edit manually.

import type { StarChallengeExpandRangeV2RequestParticipateAuthorRange } from "../models/index";

export interface StarChallengeExpandRangeV2Request {
  challenge_end_time?: number;
  challenge_task_id: number | string;
  developer_id?: number | string;
  participate_author_range?: StarChallengeExpandRangeV2RequestParticipateAuthorRange;
  star_id: number | string;
}

