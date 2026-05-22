// Generated from oceanengine/ad_open_sdk_go models/model_promotion_auto_generate_config_get_v3_0_response_data_strategy_data_inner.go
// Do not edit manually.

import type { PromotionAutoGenerateConfigGetV30DataStrategyDataType, PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerInfo, PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerStrategyStateInner } from "../models/index";

export interface PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInner {
  info?: PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerInfo;
  strategy_id: number | string;
  strategy_name?: string;
  strategy_state?: PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerStrategyStateInner[];
  type: PromotionAutoGenerateConfigGetV30DataStrategyDataType;
}

