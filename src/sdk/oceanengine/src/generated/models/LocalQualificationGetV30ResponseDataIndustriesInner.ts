// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalQualificationGetV30ResponseDataIndustriesInnerOthersInner, LocalQualificationGetV30ResponseDataIndustriesInnerPromotion } from "../models";

export interface LocalQualificationGetV30ResponseDataIndustriesInner {
  industry1_id?: number;
  industry1_name?: string;
  industry2_id?: number;
  industry2_name?: string;
  industry3_id?: number;
  industry3_name?: string;
  is_history?: boolean;
  others?: LocalQualificationGetV30ResponseDataIndustriesInnerOthersInner[];
  promotion?: LocalQualificationGetV30ResponseDataIndustriesInnerPromotion;
}

