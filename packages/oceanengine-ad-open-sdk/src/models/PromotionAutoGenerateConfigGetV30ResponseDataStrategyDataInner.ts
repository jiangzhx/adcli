// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionAutoGenerateConfigGetV30DataStrategyDataType, PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerInfo, PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerStrategyStateInner } from "../models";

export interface PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInner {
  info?: PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerInfo;
  strategy_id: number;
  strategy_name?: string;
  strategy_state?: PromotionAutoGenerateConfigGetV30ResponseDataStrategyDataInnerStrategyStateInner[];
  type: PromotionAutoGenerateConfigGetV30DataStrategyDataType;
}

