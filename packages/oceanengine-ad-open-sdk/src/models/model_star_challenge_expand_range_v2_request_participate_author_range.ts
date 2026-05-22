// Generated from oceanengine/ad_open_sdk_go models/model_star_challenge_expand_range_v2_request_participate_author_range.go
// Do not edit manually.

import type { StarChallengeExpandRangeV2RequestParticipateAuthorRangeAuthorWatcherTag } from "../models/index";

export interface StarChallengeExpandRangeV2RequestParticipateAuthorRange {
  author_uids?: number[];
  author_watcher_tag?: StarChallengeExpandRangeV2RequestParticipateAuthorRangeAuthorWatcherTag;
  content_tags?: number[];
  gender?: string[];
  max_follower?: number;
  min_follower?: number;
  provinces?: string[];
}

