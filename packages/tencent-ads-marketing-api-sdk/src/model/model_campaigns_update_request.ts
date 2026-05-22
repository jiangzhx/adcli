// Generated from tencentad/marketing-api-go-sdk pkg/model/model_campaigns_update_request.go
// Do not edit manually.

import type { AdStatus, SpeedMode } from "../model/index";

export interface CampaignsUpdateRequest {
  account_id?: number | string;
  campaign_id?: number | string;
  campaign_name?: string;
  daily_budget?: number;
  total_budget?: number;
  configured_status?: AdStatus;
  speed_mode?: SpeedMode;
  begin_date?: string;
  end_date?: string;
  is_auto_replenish?: number;
}

