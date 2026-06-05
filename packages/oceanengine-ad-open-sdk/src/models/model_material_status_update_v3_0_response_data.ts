// 由 oceanengine/ad_open_sdk_go models/model_material_status_update_v3_0_response_data.go 生成
// 不要手动编辑。

import type { MaterialStatusUpdateV30ResponseDataErrorsInner } from "../models/index";

export interface MaterialStatusUpdateV30ResponseData {
  errors?: MaterialStatusUpdateV30ResponseDataErrorsInner[];
  material_ids?: (number | string)[];
  promotion_id?: number | string;
}

