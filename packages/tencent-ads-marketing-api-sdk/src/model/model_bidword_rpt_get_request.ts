// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_rpt_get_request.go
// Do not edit manually.

import type { BidwordFilteringStruct, BizFilter, OrderByReportStruct, RptFilter } from "../model/index";

export interface BidwordRptGetRequest {
  account_id?: number | string;
  filtering?: BidwordFilteringStruct[];
  group_by?: string[];
  order_by?: OrderByReportStruct[];
  page?: number;
  page_size?: number;
  rpt_filter?: RptFilter;
  biz_filter?: BizFilter;
  query_type?: number[];
  fields?: string[];
  use_unified_report?: boolean;
}

