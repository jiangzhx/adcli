// 由 oceanengine/ad_open_sdk_go models/model_ad_reject_reason_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { AdRejectReasonV2ResponseDataListInnerAdReject, AdRejectReasonV2ResponseDataListInnerCreativeRejectInner, AdRejectReasonV2ResponseDataListInnerMaterialRejectInner } from "../models/index";

export interface AdRejectReasonV2ResponseDataListInner {
  ad_reject?: AdRejectReasonV2ResponseDataListInnerAdReject;
  creative_reject?: AdRejectReasonV2ResponseDataListInnerCreativeRejectInner[];
  material_reject?: AdRejectReasonV2ResponseDataListInnerMaterialRejectInner[];
}

