// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StardeliveryTaskListV30FilteringStarTaskCategoryType, StardeliveryTaskListV30FilteringStarTaskSource, StardeliveryTaskListV30FilteringStarTaskStatus } from "../models";

export interface StardeliveryTaskListV30Filtering {
  star_task_category_name?: string;
  star_task_category_type?: StardeliveryTaskListV30FilteringStarTaskCategoryType;
  star_task_ids?: number | string[];
  star_task_name?: string;
  star_task_source?: StardeliveryTaskListV30FilteringStarTaskSource;
  star_task_status?: StardeliveryTaskListV30FilteringStarTaskStatus;
  task_modify_end_time?: string;
  task_modify_start_time?: string;
}

