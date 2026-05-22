// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAgentCreateV2RequestDiagnoseConfig } from "../models";

export interface DiagnosisTaskAgentCreateV2Request {
  advertiser_id: number | string;
  agent_id: number | string;
  diagnose_config?: DiagnosisTaskAgentCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number | string;
  ref_promotion_id?: number | string;
  video_ids?: string[];
}

