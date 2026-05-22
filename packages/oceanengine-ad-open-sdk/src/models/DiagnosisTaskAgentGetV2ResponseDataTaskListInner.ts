// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAgentGetV2DataTaskListIsAdHighQualityMaterial, DiagnosisTaskAgentGetV2DataTaskListIsEcpHighQualityMaterial, DiagnosisTaskAgentGetV2DataTaskListIsFirstPublishMaterial, DiagnosisTaskAgentGetV2DataTaskListIsInefficientMaterial, DiagnosisTaskAgentGetV2DataTaskListStatus } from "../models";

export interface DiagnosisTaskAgentGetV2ResponseDataTaskListInner {
  advertiser_id?: number | string;
  is_ad_high_quality_material?: DiagnosisTaskAgentGetV2DataTaskListIsAdHighQualityMaterial;
  is_ecp_high_quality_material?: DiagnosisTaskAgentGetV2DataTaskListIsEcpHighQualityMaterial;
  is_first_publish_material?: DiagnosisTaskAgentGetV2DataTaskListIsFirstPublishMaterial;
  is_inefficient_material?: DiagnosisTaskAgentGetV2DataTaskListIsInefficientMaterial;
  material_id?: number | string;
  not_ad_high_quality_reason?: string[];
  not_ecp_high_quality_reason?: string[];
  status: DiagnosisTaskAgentGetV2DataTaskListStatus;
  task_id: number | string;
  video_id: string;
}

