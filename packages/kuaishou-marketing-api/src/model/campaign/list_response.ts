// Generated from github.com/bububa/kwai-marketing-api/model/campaign/list_response.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface ListResponse {
  total_count?: number;
  details?: Details[];
}

export interface Details {
  status?: number;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  put_status?: number;
  create_channel?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  campaign_type?: number;
  campaign_sub_type?: number;
  create_time?: string;
  update_time?: string;
  ad_type?: number;
}
