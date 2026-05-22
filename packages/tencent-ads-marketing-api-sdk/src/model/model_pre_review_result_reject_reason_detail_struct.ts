// Generated from tencentad/marketing-api-go-sdk pkg/model/model_pre_review_result_reject_reason_detail_struct.go
// Do not edit manually.

import type { PreReviewRejectInfoLocation } from "../model/index";

export interface PreReviewResultRejectReasonDetailStruct {
  reject_reason_id?: string;
  reject_reason_content?: string;
  case_doc?: string;
  case_content?: string;
  reject_info_locations?: PreReviewRejectInfoLocation[];
}

