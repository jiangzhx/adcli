// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_reject_reason_detail_struct.go
// Do not edit manually.

import type { PrereviewRejectInfoLocationStruct } from "../v3/index";

export interface RejectReasonDetailStruct {
  reject_reason_id?: string;
  reject_reason_content?: string;
  case_doc?: string;
  case_content?: string;
  reject_info_locations?: PrereviewRejectInfoLocationStruct[];
}

