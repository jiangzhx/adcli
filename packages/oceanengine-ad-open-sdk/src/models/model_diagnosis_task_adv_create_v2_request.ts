// Generated from oceanengine/ad_open_sdk_go models/model_diagnosis_task_adv_create_v2_request.go
// Do not edit manually.

import type { DiagnosisTaskAdvCreateV2RequestDiagnoseConfig } from "../models/index";

export interface DiagnosisTaskAdvCreateV2Request {
  advertiser_id: number | string;
  diagnose_config?: DiagnosisTaskAdvCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number | string;
  ref_promotion_id?: number | string;
  video_ids?: string[];
}

