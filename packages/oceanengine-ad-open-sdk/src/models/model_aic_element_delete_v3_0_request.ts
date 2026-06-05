// 由 oceanengine/ad_open_sdk_go models/model_aic_element_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { AicElementDeleteV30AccountType } from "../models/index";

export interface AicElementDeleteV30Request {
  account_id: number | string;
  account_type: AicElementDeleteV30AccountType;
  element_id: number | string;
}

