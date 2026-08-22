// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/campaign/campaign.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface Campaign {
  campaign_id?: KuaishouId;
  campaign_name?: string;
  put_status?: number;
  status?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  campaign_type?: number;
  campaign_sub_type?: number;
  ad_type?: number;
  bid_type?: number;
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
  auto_manage?: number;
  campaign_ocpx_action_type?: number;
  campaign_ocpx_action_type_name?: string;
  campaign_deep_conversion_type?: number;
  campaign_deep_conversion_type_name?: string;
  create_time?: string;
  update_time?: string;
}

export interface AutoBuildNameRule {
  unit_name_rule?: string;
  creative_name_rule?: string;
}
