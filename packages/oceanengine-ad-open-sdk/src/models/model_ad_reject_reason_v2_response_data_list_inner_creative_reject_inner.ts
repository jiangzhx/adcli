// Generated from oceanengine/ad_open_sdk_go models/model_ad_reject_reason_v2_response_data_list_inner_creative_reject_inner.go
// Do not edit manually.

import type { AdRejectReasonV2ResponseDataListInnerCreativeRejectInnerMaterialRejectInner, AdRejectReasonV2ResponseDataListInnerCreativeRejectInnerRejectDataInner } from "../models/index";

export interface AdRejectReasonV2ResponseDataListInnerCreativeRejectInner {
  creative_id?: number | string;
  material_reject?: AdRejectReasonV2ResponseDataListInnerCreativeRejectInnerMaterialRejectInner[];
  reject_data?: AdRejectReasonV2ResponseDataListInnerCreativeRejectInnerRejectDataInner[];
}

