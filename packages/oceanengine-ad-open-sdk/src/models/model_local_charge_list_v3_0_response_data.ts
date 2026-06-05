// 由 oceanengine/ad_open_sdk_go models/model_local_charge_list_v3_0_response_data.go 生成
// 不要手动编辑。

import type { LocalChargeListV30ResponseDataChargeListInner, LocalChargeListV30ResponseDataPageInfo } from "../models/index";

export interface LocalChargeListV30ResponseData {
  charge_list?: LocalChargeListV30ResponseDataChargeListInner[];
  page_info?: LocalChargeListV30ResponseDataPageInfo;
  total_amount?: number;
  total_cancel_amount?: number;
  total_charge_amount?: number;
}

