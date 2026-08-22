// Generated from github.com/bububa/kwai-marketing-api/model/live/report/live_user_report.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ListLiveUserReportRequestInit {
  advertiser_id?: KuaishouId;
  start_date_min?: string;
  end_date_min?: string;
  start_date?: string;
  end_date?: string;
  temporal_granularity?: string;
  page?: number;
  page_size?: number;
}

export class ListLiveUserReportRequest implements PostRequest, ListLiveUserReportRequestInit {
  advertiser_id?: KuaishouId;
  start_date_min?: string;
  end_date_min?: string;
  start_date?: string;
  end_date?: string;
  temporal_granularity?: string;
  page?: number;
  page_size?: number;

  constructor(init: ListLiveUserReportRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.start_date_min = init.start_date_min;
    this.end_date_min = init.end_date_min;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.temporal_granularity = init.temporal_granularity;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/v1/report/live_user_report";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      start_date_min: this.start_date_min,
      end_date_min: this.end_date_min,
      start_date: this.start_date,
      end_date: this.end_date,
      temporal_granularity: this.temporal_granularity,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListLiveUserReportResponse {
  total_count?: number;
  details?: LiveUserReport[];
}

export interface LiveUserReport {
  live_start_time?: number;
  live_end_time?: number;
  ad_live_follow?: number;
  standard_live_played_started?: number;
  live_played_started?: number;
  live_room_avg_played_seconds?: number;
  conversion_component_rate?: number;
  live_played_started_cost?: number;
  conversion_component_click?: number;
  ad_app_download_half_impression?: number;
  user_id?: KuaishouId;
  ad_landing_page_impression?: number;
  simple_live_played_started?: number;
  live_stream_id?: KuaishouId;
  ad_live_follow_cost?: number;
  ad_live_comment?: number;
  conversion_component_impression?: number;
  ad_live_share?: number;
}
