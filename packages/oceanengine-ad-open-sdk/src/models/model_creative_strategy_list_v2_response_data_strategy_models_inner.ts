// Generated from oceanengine/ad_open_sdk_go models/model_creative_strategy_list_v2_response_data_strategy_models_inner.go
// Do not edit manually.

import type { CreativeStrategyListV2DataStrategyModelsType, CreativeStrategyListV2ResponseDataStrategyModelsInnerInfo, CreativeStrategyListV2ResponseDataStrategyModelsInnerStateListInner } from "../models/index";

export interface CreativeStrategyListV2ResponseDataStrategyModelsInner {
  info?: CreativeStrategyListV2ResponseDataStrategyModelsInnerInfo;
  state_list?: CreativeStrategyListV2ResponseDataStrategyModelsInnerStateListInner[];
  strategy_id: number | string;
  strategy_name?: string;
  type: CreativeStrategyListV2DataStrategyModelsType;
}

