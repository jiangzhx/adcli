// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAgentListV2DataTaskListIsAdHighQualityMaterial, DiagnosisTaskAgentListV2DataTaskListIsEcpHighQualityMaterial, DiagnosisTaskAgentListV2DataTaskListIsFirstPublishMaterial, DiagnosisTaskAgentListV2DataTaskListIsInefficientMaterial, DiagnosisTaskAgentListV2DataTaskListStatus } from "../models";

export interface DiagnosisTaskAgentListV2ResponseDataTaskListInner {
  advertiser_id?: number | string;
  is_ad_high_quality_material?: DiagnosisTaskAgentListV2DataTaskListIsAdHighQualityMaterial;
  is_ecp_high_quality_material?: DiagnosisTaskAgentListV2DataTaskListIsEcpHighQualityMaterial;
  is_first_publish_material?: DiagnosisTaskAgentListV2DataTaskListIsFirstPublishMaterial;
  is_inefficient_material?: DiagnosisTaskAgentListV2DataTaskListIsInefficientMaterial;
  material_id?: number | string;
  not_ad_high_quality_reason?: string[];
  not_ecp_high_quality_reason?: string[];
  status: DiagnosisTaskAgentListV2DataTaskListStatus;
  task_id: number | string;
  video_id: string;
}

