// 由 oceanengine/ad_open_sdk_go models/model_promotion_easy_update_v3_0_request.go 生成
// 不要手动编辑。

import type { PromotionEasyUpdateV30RequestPromotionMaterials } from "../models/index";

export interface PromotionEasyUpdateV30Request {
  advertiser_id: number | string;
  budget?: number;
  cpa_bid?: number;
  delivery_duration?: number;
  project_id: number | string;
  promotion_id: number | string;
  promotion_materials?: PromotionEasyUpdateV30RequestPromotionMaterials;
  schedule_time?: string;
}

