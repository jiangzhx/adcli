// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdRejectReasonV2ResponseDataListInnerAdReject, AdRejectReasonV2ResponseDataListInnerCreativeRejectInner, AdRejectReasonV2ResponseDataListInnerMaterialRejectInner } from "../models";

export interface AdRejectReasonV2ResponseDataListInner {
  ad_reject?: AdRejectReasonV2ResponseDataListInnerAdReject;
  creative_reject?: AdRejectReasonV2ResponseDataListInnerCreativeRejectInner[];
  material_reject?: AdRejectReasonV2ResponseDataListInnerMaterialRejectInner[];
}

