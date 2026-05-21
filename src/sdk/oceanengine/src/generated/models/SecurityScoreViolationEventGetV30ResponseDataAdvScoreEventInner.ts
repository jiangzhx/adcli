// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SecurityScoreViolationEventGetV30DataAdvScoreEventIllegalType, SecurityScoreViolationEventGetV30DataAdvScoreEventStatus } from "../models";

export interface SecurityScoreViolationEventGetV30ResponseDataAdvScoreEventInner {
  ad_id?: number;
  advertiser_id?: number;
  create_time?: string;
  event_id?: number;
  illegal_type?: SecurityScoreViolationEventGetV30DataAdvScoreEventIllegalType;
  material_id?: string;
  reject_reason?: string;
  score?: number;
  status?: SecurityScoreViolationEventGetV30DataAdvScoreEventStatus;
  violation_evidence_img?: string;
}

