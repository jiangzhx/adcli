// 由 oceanengine/ad_open_sdk_go models/model_dpa_offline_product_batch_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { DpaOfflineProductBatchDeleteV30AccountType } from "../models/index";

export interface DpaOfflineProductBatchDeleteV30Request {
  account_id: number | string;
  account_type: DpaOfflineProductBatchDeleteV30AccountType;
  delete_product_limit: number;
  last_modify_time: string;
  platform_id: number | string;
}

