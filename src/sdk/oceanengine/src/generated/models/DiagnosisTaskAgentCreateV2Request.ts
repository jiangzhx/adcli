// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DiagnosisTaskAgentCreateV2RequestDiagnoseConfig } from "../models";

export interface DiagnosisTaskAgentCreateV2Request {
  advertiser_id: number;
  agent_id: number;
  diagnose_config?: DiagnosisTaskAgentCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number;
  ref_promotion_id?: number;
  video_ids?: string[];
}

