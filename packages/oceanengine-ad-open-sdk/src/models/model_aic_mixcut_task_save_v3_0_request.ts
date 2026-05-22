// Generated from oceanengine/ad_open_sdk_go models/model_aic_mixcut_task_save_v3_0_request.go
// Do not edit manually.

import type { AicMixcutTaskSaveV30AccountType, AicMixcutTaskSaveV30RequestVideosInner } from "../models/index";

export interface AicMixcutTaskSaveV30Request {
  account_id: number | string;
  account_type: AicMixcutTaskSaveV30AccountType;
  videos: AicMixcutTaskSaveV30RequestVideosInner[];
}

