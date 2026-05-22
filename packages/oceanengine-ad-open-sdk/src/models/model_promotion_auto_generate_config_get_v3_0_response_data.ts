// Generated from oceanengine/ad_open_sdk_go models/model_promotion_auto_generate_config_get_v3_0_response_data.go
// Do not edit manually.

import type { PromotionAutoGenerateConfigGetV30DataVersion, PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInner, PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInner } from "../models/index";

export interface PromotionAutoGenerateConfigGetV30ResponseData {
  config_id?: number | string;
  strategy_data?: PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInner[];
  templates?: PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInner[];
  update_time?: number;
  version?: PromotionAutoGenerateConfigGetV30DataVersion;
}

