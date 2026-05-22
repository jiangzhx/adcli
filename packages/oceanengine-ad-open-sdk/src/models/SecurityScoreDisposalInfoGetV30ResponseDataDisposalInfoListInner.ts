// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalAction, SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalStatus } from "../models";

export interface SecurityScoreDisposalInfoGetV30ResponseDataDisposalInfoListInner {
  advertiser_id?: number;
  disposal_action: SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalAction;
  disposal_end_time?: string;
  disposal_info_id?: number;
  disposal_score: number;
  disposal_start_time?: string;
  disposal_status: SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalStatus;
  disposal_term: string;
  outer_text?: string;
}

