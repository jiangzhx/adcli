// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DiagnosisTaskAdvCreateV2RequestDiagnoseConfig } from "../models";

export interface DiagnosisTaskAdvCreateV2Request {
  advertiser_id: number;
  diagnose_config?: DiagnosisTaskAdvCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number;
  ref_promotion_id?: number;
  video_ids?: string[];
}

