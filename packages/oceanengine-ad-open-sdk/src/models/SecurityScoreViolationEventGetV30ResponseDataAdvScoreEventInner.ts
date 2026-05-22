// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SecurityScoreViolationEventGetV30DataAdvScoreEventIllegalType, SecurityScoreViolationEventGetV30DataAdvScoreEventStatus } from "../models";

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

