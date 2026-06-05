// 由 oceanengine/ad_open_sdk_go models/model_material_status_update_v3_0_request.go 生成
// 不要手动编辑。

import type { MaterialStatusUpdateV30RequestDataInner } from "../models/index";

export interface MaterialStatusUpdateV30Request {
  advertiser_id: number | string;
  data: MaterialStatusUpdateV30RequestDataInner[];
  promotion_id: number | string;
}

