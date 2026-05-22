// Generated from oceanengine/ad_open_sdk_go models/model_security_create_appeal_v3_0_request.go
// Do not edit manually.

import type { SecurityCreateAppealV30AppealIdType, SecurityCreateAppealV30QuestionType } from "../models/index";

export interface SecurityCreateAppealV30Request {
  advertiser_id: number | string;
  appeal_id: number | string;
  appeal_id_type: SecurityCreateAppealV30AppealIdType;
  mids?: number[];
  question_desc?: string;
  question_type: SecurityCreateAppealV30QuestionType;
}

