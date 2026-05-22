// Generated from oceanengine/ad_open_sdk_go models/model_security_score_violation_event_get_v3_0_response_data_adv_score_event_inner.go
// Do not edit manually.

import type { SecurityScoreViolationEventGetV30DataAdvScoreEventIllegalType, SecurityScoreViolationEventGetV30DataAdvScoreEventStatus } from "../models/index";

export interface SecurityScoreViolationEventGetV30ResponseDataAdvScoreEventInner {
  ad_id?: number | string;
  advertiser_id?: number | string;
  create_time?: string;
  event_id?: number | string;
  illegal_type?: SecurityScoreViolationEventGetV30DataAdvScoreEventIllegalType;
  material_id?: string;
  reject_reason?: string;
  score?: number;
  status?: SecurityScoreViolationEventGetV30DataAdvScoreEventStatus;
  violation_evidence_img?: string;
}

