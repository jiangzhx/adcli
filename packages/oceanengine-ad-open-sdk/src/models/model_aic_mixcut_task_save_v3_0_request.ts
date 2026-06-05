// 由 oceanengine/ad_open_sdk_go models/model_aic_mixcut_task_save_v3_0_request.go 生成
// 不要手动编辑。

import type { AicMixcutTaskSaveV30AccountType, AicMixcutTaskSaveV30RequestVideosInner } from "../models/index";

export interface AicMixcutTaskSaveV30Request {
  account_id: number | string;
  account_type: AicMixcutTaskSaveV30AccountType;
  videos: AicMixcutTaskSaveV30RequestVideosInner[];
}

