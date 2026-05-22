// Generated from oceanengine/ad_open_sdk_go models/model_tools_union_flow_package_promotion_report_v3_0_filter.go
// Do not edit manually.

import type { ToolsUnionFlowPackagePromotionReportV30FilterLandingType } from "../models/index";

export interface ToolsUnionFlowPackagePromotionReportV30Filter {
  end_time?: string;
  high_cost?: string;
  landing_type?: ToolsUnionFlowPackagePromotionReportV30FilterLandingType;
  low_cost?: string;
  promotion_ids?: number | string[];
  rits?: number[];
  start_time?: string;
}

