// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AicMixcutTaskSaveV30AccountType, AicMixcutTaskSaveV30RequestVideosInner } from "../models";

export interface AicMixcutTaskSaveV30Request {
  account_id: number | string;
  account_type: AicMixcutTaskSaveV30AccountType;
  videos: AicMixcutTaskSaveV30RequestVideosInner[];
}

