// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_ad_union_request.go
// Do not edit manually.

import type { DateRange, FilteringStruct, OrderByStruct } from "../model/index";

export interface ReportAdUnionRequest {
  filtering?: FilteringStruct[];
  date_range?: DateRange;
  group_by?: string[];
  order_by?: OrderByStruct[];
  page?: number;
  page_size?: number;
  fields?: string[];
  async?: number;
  adq_accounts_upgrade_enabled?: boolean;
  account_id?: number | string;
}

