// 由 oceanengine/ad_open_sdk_go models/model_promotion_auto_generate_config_create_v3_0_request.go 生成
// 不要手动编辑。

import type { PromotionAutoGenerateConfigCreateV30RequestStrategyDataInner } from "../models/index";

export interface PromotionAutoGenerateConfigCreateV30Request {
  advertiser_id: number | string;
  promotion_id?: number | string;
  strategy_data?: PromotionAutoGenerateConfigCreateV30RequestStrategyDataInner[];
}

