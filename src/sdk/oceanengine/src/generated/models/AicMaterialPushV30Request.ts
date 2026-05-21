// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AicMaterialPushV30AccountType, AicMaterialPushV30BussinessType, AicMaterialPushV30RequestVideosInner } from "../models";

export interface AicMaterialPushV30Request {
  account_id: number;
  account_type: AicMaterialPushV30AccountType;
  advertiser_ids: number[];
  bussiness_type: AicMaterialPushV30BussinessType;
  videos: AicMaterialPushV30RequestVideosInner[];
}

