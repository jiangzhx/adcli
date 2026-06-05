// 由 oceanengine/ad_open_sdk_go models/model_project_create_v3_0_request_delivery_range.go 生成
// 不要手动编辑。

import type { ProjectCreateV30DeliveryRangeInventoryCatalog, ProjectCreateV30DeliveryRangeInventoryType, ProjectCreateV30DeliveryRangeUnionVideoType } from "../models/index";

export interface ProjectCreateV30RequestDeliveryRange {
  inventory_catalog: ProjectCreateV30DeliveryRangeInventoryCatalog;
  inventory_type?: ProjectCreateV30DeliveryRangeInventoryType[];
  union_video_type?: ProjectCreateV30DeliveryRangeUnionVideoType;
}

