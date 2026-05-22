// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeRejectReasonV2ResponseDataListInnerMaterialRejectInner, CreativeRejectReasonV2ResponseDataListInnerRejectDataInner } from "../models";

export interface CreativeRejectReasonV2ResponseDataListInner {
  creative_id?: number | string;
  material_reject?: CreativeRejectReasonV2ResponseDataListInnerMaterialRejectInner[];
  reject_data?: CreativeRejectReasonV2ResponseDataListInnerRejectDataInner[];
}

