// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_om_get_challenge_v2_response_data_task_info_challenge_info_participate_author_range.go
// Do not edit manually.

import type { StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoParticipateAuthorRangeAuthorWatcherTag } from "../models/index";

export interface StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoParticipateAuthorRange {
  author_uids?: number[];
  author_watcher_tag?: StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoParticipateAuthorRangeAuthorWatcherTag;
  cancel_author_uids?: number[];
  cancel_unique_ids?: string[];
  content_tags?: number[];
  gender?: string[];
  max_follower?: number;
  min_follower?: number;
  provinces?: string[];
  unique_ids?: string[];
}

