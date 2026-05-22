// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_refund_view_get_v2_response_data.go
// Do not edit manually.

import type { ToolsClueRefundViewGetV2ResponseDataShowOuterStagesInner, ToolsClueRefundViewGetV2ResponseDataShowTimeDetails } from "../models/index";

export interface ToolsClueRefundViewGetV2ResponseData {
  full_refund_terms?: string[];
  global_refund_result?: number;
  global_refund_result_reason?: string[];
  global_refund_result_text?: string;
  show_outer_stages?: ToolsClueRefundViewGetV2ResponseDataShowOuterStagesInner[];
  show_refund_view?: boolean;
  show_time_details?: ToolsClueRefundViewGetV2ResponseDataShowTimeDetails;
}

