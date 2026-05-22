// Generated from oceanengine/ad_open_sdk_go models/model_security_score_disposal_info_get_v3_0_response_data_disposal_info_list_inner.go
// Do not edit manually.

import type { SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalAction, SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalStatus } from "../models/index";

export interface SecurityScoreDisposalInfoGetV30ResponseDataDisposalInfoListInner {
  advertiser_id?: number | string;
  disposal_action: SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalAction;
  disposal_end_time?: string;
  disposal_info_id?: number | string;
  disposal_score: number;
  disposal_start_time?: string;
  disposal_status: SecurityScoreDisposalInfoGetV30DataDisposalInfoListDisposalStatus;
  disposal_term: string;
  outer_text?: string;
}

