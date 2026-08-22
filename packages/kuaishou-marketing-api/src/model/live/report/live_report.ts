// Generated from github.com/bububa/kwai-marketing-api/model/live/report/live_report.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface ListLiveReportResponse {
  total_count?: number;
  details?: LiveReport[];
  stat_date?: string;
  stat_hour?: number;
}

export interface LiveReport {
  live_start_time?: number;
  live_end_time?: number;
  ad_live_follow?: number;
  live_played_started?: number;
  live_played_started_cost?: number;
  standard_live_played_started?: number;
  live_room_avg_played_seconds?: number;
  conversion_component_rate?: number;
  conversion_component_click?: number;
  ad_app_download_half_impression?: number;
  user_id?: KuaishouId;
  ad_landing_page_impression?: number;
  simple_live_played_started?: number;
  live_stream_id?: KuaishouId;
  ad_live_share?: number;
  ad_live_comment?: number;
  ad_live_follow_cost?: number;
  conversion_component_impression?: number;
}
