// 由 oceanengine/ad_open_sdk_go models/model_aic_material_push_v3_0_request.go 生成
// 不要手动编辑。

import type { AicMaterialPushV30AccountType, AicMaterialPushV30BussinessType, AicMaterialPushV30RequestVideosInner } from "../models/index";

export interface AicMaterialPushV30Request {
  account_id: number | string;
  account_type: AicMaterialPushV30AccountType;
  advertiser_ids: (number | string)[];
  bussiness_type: AicMaterialPushV30BussinessType;
  videos: AicMaterialPushV30RequestVideosInner[];
}

