// Generated from oceanengine/ad_open_sdk_go models/model_report_stardelivery_task_data_get_v3_0_filtering.go
// Do not edit manually.

import type { ReportStardeliveryTaskDataGetV30FilteringMetricValueFilterInner, ReportStardeliveryTaskDataGetV30FilteringStarTaskCategoryType, ReportStardeliveryTaskDataGetV30FilteringStarTaskStatus } from "../models/index";

export interface ReportStardeliveryTaskDataGetV30Filtering {
  metric_value_filter?: ReportStardeliveryTaskDataGetV30FilteringMetricValueFilterInner[];
  star_task_category_name?: string;
  star_task_category_type?: ReportStardeliveryTaskDataGetV30FilteringStarTaskCategoryType;
  star_task_ids?: (number | string)[];
  star_task_status?: ReportStardeliveryTaskDataGetV30FilteringStarTaskStatus;
}

