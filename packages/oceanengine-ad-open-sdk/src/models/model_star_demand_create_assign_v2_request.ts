// 由 oceanengine/ad_open_sdk_go models/model_star_demand_create_assign_v2_request.go 生成
// 不要手动编辑。

import type { StarDemandCreateAssignV2RequestDemandInfo, StarDemandCreateAssignV2RequestOrderItemInfo } from "../models/index";

export interface StarDemandCreateAssignV2Request {
  demand_info: StarDemandCreateAssignV2RequestDemandInfo;
  order_item_info: StarDemandCreateAssignV2RequestOrderItemInfo;
  star_id: number | string;
}

