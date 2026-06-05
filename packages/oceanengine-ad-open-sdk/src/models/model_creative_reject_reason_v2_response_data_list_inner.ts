// 由 oceanengine/ad_open_sdk_go models/model_creative_reject_reason_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { CreativeRejectReasonV2ResponseDataListInnerMaterialRejectInner, CreativeRejectReasonV2ResponseDataListInnerRejectDataInner } from "../models/index";

export interface CreativeRejectReasonV2ResponseDataListInner {
  creative_id?: number | string;
  material_reject?: CreativeRejectReasonV2ResponseDataListInnerMaterialRejectInner[];
  reject_data?: CreativeRejectReasonV2ResponseDataListInnerRejectDataInner[];
}

