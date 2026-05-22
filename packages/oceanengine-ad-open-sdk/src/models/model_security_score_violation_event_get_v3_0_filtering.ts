// Generated from oceanengine/ad_open_sdk_go models/model_security_score_violation_event_get_v3_0_filtering.go
// Do not edit manually.

import type { SecurityScoreViolationEventGetV30FilteringIllegalType, SecurityScoreViolationEventGetV30FilteringStatus } from "../models/index";

export interface SecurityScoreViolationEventGetV30Filtering {
  end_time?: string;
  event_id?: number | string;
  illegal_type?: SecurityScoreViolationEventGetV30FilteringIllegalType;
  start_time?: string;
  status?: SecurityScoreViolationEventGetV30FilteringStatus;
}

