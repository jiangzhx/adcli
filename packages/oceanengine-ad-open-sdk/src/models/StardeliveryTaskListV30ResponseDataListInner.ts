// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StardeliveryTaskListV30DataListStarTaskAnchorType, StardeliveryTaskListV30DataListStarTaskCategoryType, StardeliveryTaskListV30DataListStarTaskExternalAction, StardeliveryTaskListV30DataListStarTaskMaterialPurchaseMethod, StardeliveryTaskListV30DataListStarTaskSource, StardeliveryTaskListV30DataListStarTaskStatus, StardeliveryTaskListV30DataListStarTaskSubStatus } from "../models";

export interface StardeliveryTaskListV30ResponseDataListInner {
  star_account_name?: string;
  star_ad_cost_divide_ratio?: number;
  star_author_pending?: number;
  star_id?: number | string;
  star_material_bid?: number;
  star_material_bid_range?: number[];
  star_pending_confirm_count?: number;
  star_sale_cost_end_time?: string;
  star_task_album_id?: number | string;
  star_task_album_name?: string;
  star_task_anchor_type?: StardeliveryTaskListV30DataListStarTaskAnchorType;
  star_task_bid?: number;
  star_task_bid_android?: number;
  star_task_bid_ios?: number;
  star_task_budget?: number;
  star_task_can_delivery_item_count?: number;
  star_task_category_name?: string;
  star_task_category_type?: StardeliveryTaskListV30DataListStarTaskCategoryType;
  star_task_create_time?: string;
  star_task_external_action?: StardeliveryTaskListV30DataListStarTaskExternalAction;
  star_task_id?: number | string;
  star_task_material_purchase_method?: StardeliveryTaskListV30DataListStarTaskMaterialPurchaseMethod;
  star_task_modify_time?: string;
  star_task_name?: string;
  star_task_post_end_time?: string;
  star_task_post_item_count?: number;
  star_task_relate_project_count?: number;
  star_task_source?: StardeliveryTaskListV30DataListStarTaskSource;
  star_task_start_time?: string;
  star_task_status?: StardeliveryTaskListV30DataListStarTaskStatus;
  star_task_sub_status?: StardeliveryTaskListV30DataListStarTaskSubStatus;
  star_time_cost_end_time?: string;
}

