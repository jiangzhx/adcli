// Generated from oceanengine/ad_open_sdk_go models/model_ad_reject_reason_v2_response_data_list_inner.go
// Do not edit manually.

import type { AdRejectReasonV2ResponseDataListInnerAdReject, AdRejectReasonV2ResponseDataListInnerCreativeRejectInner, AdRejectReasonV2ResponseDataListInnerMaterialRejectInner } from "../models/index";

export interface AdRejectReasonV2ResponseDataListInner {
  ad_reject?: AdRejectReasonV2ResponseDataListInnerAdReject;
  creative_reject?: AdRejectReasonV2ResponseDataListInnerCreativeRejectInner[];
  material_reject?: AdRejectReasonV2ResponseDataListInnerMaterialRejectInner[];
}

