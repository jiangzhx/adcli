// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_list_v2_response_data_list_inner.go
// Do not edit manually.

import type { StarDemandListV2DataListComponentType, StarDemandListV2DataListTaskCategory, StarDemandListV2DataListUniversalSettlementType } from "../models/index";

export interface StarDemandListV2ResponseDataListInner {
  component_type?: StarDemandListV2DataListComponentType;
  create_time?: string;
  demand_id?: number | string;
  demand_name?: string;
  task_category?: StarDemandListV2DataListTaskCategory;
  universal_settlement_type?: StarDemandListV2DataListUniversalSettlementType;
}

