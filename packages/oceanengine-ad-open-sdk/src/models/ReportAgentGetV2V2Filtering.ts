// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportAgentGetV2V2FilteringAccountSource, ReportAgentGetV2V2FilteringAccountStatus, ReportAgentGetV2V2FilteringActive } from "../models";

export interface ReportAgentGetV2V2Filtering {
  account_source?: ReportAgentGetV2V2FilteringAccountSource;
  account_status?: ReportAgentGetV2V2FilteringAccountStatus;
  active?: ReportAgentGetV2V2FilteringActive;
  advertiser_ids?: number | string[];
  company_name?: string;
  end_audit_pass_time?: string;
  first_industry?: string;
  second_industry?: string;
  start_audit_pass_time?: string;
}

