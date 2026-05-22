// Generated from oceanengine/ad_open_sdk_go models/model_report_stardelivery_task_data_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ReportStardeliveryTaskDataGetV30DataListStarTaskAnchorType, ReportStardeliveryTaskDataGetV30DataListStarTaskCategoryType, ReportStardeliveryTaskDataGetV30DataListStarTaskExternalAction, ReportStardeliveryTaskDataGetV30DataListStarTaskSource, ReportStardeliveryTaskDataGetV30DataListStarTaskStatus } from "../models/index";

export interface ReportStardeliveryTaskDataGetV30ResponseDataListInner {
  active?: number;
  active_pay?: number;
  active_register?: number;
  android_convert_cnt?: number;
  game_pay_count?: number;
  install_finish_cnt?: number;
  ios_convert_cnt?: number;
  non_ad_stat_cost?: number;
  star_active_count?: number;
  star_active_pay_count?: number;
  star_active_register_count?: number;
  star_convert_cnt?: number;
  star_deep_purchase_count?: number;
  star_install_finish_count?: number;
  star_material_stat_cost?: number;
  star_sale_material_stat_cost?: number;
  star_stat_cost?: number;
  star_task_album_id?: number | string;
  star_task_album_name?: string;
  star_task_anchor_type?: ReportStardeliveryTaskDataGetV30DataListStarTaskAnchorType;
  star_task_approaching_budget_limit_isv_count?: number;
  star_task_budget?: number;
  star_task_budget_cost_rate?: number;
  star_task_can_delivery_item_count?: number;
  star_task_category_name?: string;
  star_task_category_type?: ReportStardeliveryTaskDataGetV30DataListStarTaskCategoryType;
  star_task_external_action?: ReportStardeliveryTaskDataGetV30DataListStarTaskExternalAction;
  star_task_id?: number | string;
  star_task_lock_amount?: number;
  star_task_name?: string;
  star_task_post_item_count?: number;
  star_task_relate_project_count?: number;
  star_task_source?: ReportStardeliveryTaskDataGetV30DataListStarTaskSource;
  star_task_start_time?: string;
  star_task_status?: ReportStardeliveryTaskDataGetV30DataListStarTaskStatus;
  star_task_unfrozen_amount?: number;
  stat_android_cost?: number;
  stat_cost?: number;
  stat_ios_cost?: number;
}

