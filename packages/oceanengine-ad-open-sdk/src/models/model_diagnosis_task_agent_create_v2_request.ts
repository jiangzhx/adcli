// 由 oceanengine/ad_open_sdk_go models/model_diagnosis_task_agent_create_v2_request.go 生成
// 不要手动编辑。

import type { DiagnosisTaskAgentCreateV2RequestDiagnoseConfig } from "../models/index";

export interface DiagnosisTaskAgentCreateV2Request {
  advertiser_id: number | string;
  agent_id: number | string;
  diagnose_config?: DiagnosisTaskAgentCreateV2RequestDiagnoseConfig;
  ref_ad_id?: number | string;
  ref_promotion_id?: number | string;
  video_ids?: string[];
}

