// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_landing_page_request.go
// Do not edit manually.

import type { DateRange, LandingPageFiltering, OrderByStruct } from "../model/index";

export interface ReportLandingPageRequest {
  filtering?: LandingPageFiltering;
  date_range?: DateRange;
  group_by?: string[];
  order_by?: OrderByStruct[];
  page?: number;
  page_size?: number;
  fields?: string[];
  async?: number;
  account_id?: number | string;
}

