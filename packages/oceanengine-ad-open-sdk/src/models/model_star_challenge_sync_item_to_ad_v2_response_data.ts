// Generated from oceanengine/ad_open_sdk_go models/model_star_challenge_sync_item_to_ad_v2_response_data.go
// Do not edit manually.

import type { StarChallengeSyncItemToAdV2ResponseDataFailSyncReasonInner, StarChallengeSyncItemToAdV2ResponseDataSyncDetailsInner } from "../models/index";

export interface StarChallengeSyncItemToAdV2ResponseData {
  exist_success_sync: boolean;
  fail_sync_reason: StarChallengeSyncItemToAdV2ResponseDataFailSyncReasonInner[];
  sync_details?: StarChallengeSyncItemToAdV2ResponseDataSyncDetailsInner[];
}

