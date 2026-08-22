// Generated from github.com/bububa/kwai-marketing-api/model/report/asynctask/task.go
// Do not edit manually.

import type { KuaishouId } from "../../types";
import type { TemporalGranularityType } from "../../temporal_granularity";

export interface TaskParams {
  start_date?: string;
  end_date?: string;
  view_type?: number;
  campaign_ids?: KuaishouId[];
  unit_ids?: KuaishouId[];
  creative_ids?: KuaishouId[];
  word_info_ids?: KuaishouId[];
  query?: string[];
  photo_ids?: string[];
  cover_ids?: KuaishouId[];
  virtual_creative_ids?: KuaishouId[];
  report_dims?: string[];
  temporal_granularity?: TemporalGranularityType;
  selected_columns?: string[];
}

export interface Task {
  advertiser_id?: KuaishouId;
  task_id?: KuaishouId;
  task_name?: string;
  create_time?: string;
  task_status?: number;
  file_size?: number;
}
