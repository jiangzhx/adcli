// Generated from github.com/bububa/kwai-marketing-api/model/report/report_request.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { TemporalGranularityType } from "../temporal_granularity";

export interface ReportRequest {
  advertiser_id?: KuaishouId;
  start_date_min?: string;
  end_date_min?: string;
  start_date?: string;
  end_date?: string;
  temporal_granularity?: TemporalGranularityType;
  report_dims?: string[];
  selected_column?: string[];
  page?: number;
  page_size?: number;
}
