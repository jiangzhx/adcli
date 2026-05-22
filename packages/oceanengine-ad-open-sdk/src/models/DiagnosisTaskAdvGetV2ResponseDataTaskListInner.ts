// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAdvGetV2DataTaskListIsAdHighQualityMaterial, DiagnosisTaskAdvGetV2DataTaskListIsEcpHighQualityMaterial, DiagnosisTaskAdvGetV2DataTaskListIsFirstPublishMaterial, DiagnosisTaskAdvGetV2DataTaskListIsInefficientMaterial, DiagnosisTaskAdvGetV2DataTaskListStatus } from "../models";

export interface DiagnosisTaskAdvGetV2ResponseDataTaskListInner {
  advertiser_id?: number;
  is_ad_high_quality_material?: DiagnosisTaskAdvGetV2DataTaskListIsAdHighQualityMaterial;
  is_ecp_high_quality_material?: DiagnosisTaskAdvGetV2DataTaskListIsEcpHighQualityMaterial;
  is_first_publish_material?: DiagnosisTaskAdvGetV2DataTaskListIsFirstPublishMaterial;
  is_inefficient_material?: DiagnosisTaskAdvGetV2DataTaskListIsInefficientMaterial;
  material_id?: number;
  not_ad_high_quality_reason?: string[];
  not_ecp_high_quality_reason?: string[];
  status: DiagnosisTaskAdvGetV2DataTaskListStatus;
  task_id: number;
  video_id: string;
}

