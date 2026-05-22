// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAdvCreateV2RequestDiagnoseConfig } from "../models";

export interface DiagnosisTaskAdvCreateV2Request {
  advertiser_id: number | string;
  diagnose_config?: DiagnosisTaskAdvCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number | string;
  ref_promotion_id?: number | string;
  video_ids?: string[];
}

