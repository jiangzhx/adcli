// 由 oceanengine/ad_open_sdk_go models/model_charge_list_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ChargeListV30ResponseDataChargeListInner, ChargeListV30ResponseDataPageInfo } from "../models/index";

export interface ChargeListV30ResponseData {
  charge_list?: ChargeListV30ResponseDataChargeListInner[];
  page_info?: ChargeListV30ResponseDataPageInfo;
  total_amount?: number;
  total_cancel_amount?: number;
  total_charge_amount?: number;
}

