// 由 oceanengine/ad_open_sdk_go models/model_project_roigoal_update_v3_0_request_data_inner.go 生成
// 不要手动编辑。

import type { ProjectRoigoalUpdateV30RequestDataInnerShopMultiRoiGoalsInner } from "../models/index";

export interface ProjectRoigoalUpdateV30RequestDataInner {
  project_id: number | string;
  roi_goal?: number;
  shop_multi_roi_goals?: ProjectRoigoalUpdateV30RequestDataInnerShopMultiRoiGoalsInner[];
}

