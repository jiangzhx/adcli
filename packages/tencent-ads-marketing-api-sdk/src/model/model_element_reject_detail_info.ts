// Generated from tencentad/marketing-api-go-sdk pkg/model/model_element_reject_detail_info.go
// Do not edit manually.

import type { RejectInfoLocation } from "../model/index";

export interface ElementRejectDetailInfo {
  element_name?: string;
  element_value?: string;
  element_type?: string;
  reason?: string;
  case_doc?: string;
  case_content?: string;
  reject_info_location?: RejectInfoLocation[];
}

