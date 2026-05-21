// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CreativeStrategyListV2DataStrategyModelsType, CreativeStrategyListV2ResponseDataStrategyModelsInnerInfo, CreativeStrategyListV2ResponseDataStrategyModelsInnerStateListInner } from "../models";

export interface CreativeStrategyListV2ResponseDataStrategyModelsInner {
  info?: CreativeStrategyListV2ResponseDataStrategyModelsInnerInfo;
  state_list?: CreativeStrategyListV2ResponseDataStrategyModelsInnerStateListInner[];
  strategy_id: number;
  strategy_name?: string;
  type: CreativeStrategyListV2DataStrategyModelsType;
}

