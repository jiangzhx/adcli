// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarChallengeSyncItemToAdV2ResponseDataFailSyncReasonInner, StarChallengeSyncItemToAdV2ResponseDataSyncDetailsInner } from "../models";

export interface StarChallengeSyncItemToAdV2ResponseData {
  exist_success_sync: boolean;
  fail_sync_reason: StarChallengeSyncItemToAdV2ResponseDataFailSyncReasonInner[];
  sync_details?: StarChallengeSyncItemToAdV2ResponseDataSyncDetailsInner[];
}

