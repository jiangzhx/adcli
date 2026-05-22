// Generated from oceanengine/ad_open_sdk_go models/model_diagnosis_task_adv_get_v2_response_data_task_list_inner.go
// Do not edit manually.

import type { DiagnosisTaskAdvGetV2DataTaskListIsAdHighQualityMaterial, DiagnosisTaskAdvGetV2DataTaskListIsEcpHighQualityMaterial, DiagnosisTaskAdvGetV2DataTaskListIsFirstPublishMaterial, DiagnosisTaskAdvGetV2DataTaskListIsInefficientMaterial, DiagnosisTaskAdvGetV2DataTaskListStatus } from "../models/index";

export interface DiagnosisTaskAdvGetV2ResponseDataTaskListInner {
  advertiser_id?: number | string;
  is_ad_high_quality_material?: DiagnosisTaskAdvGetV2DataTaskListIsAdHighQualityMaterial;
  is_ecp_high_quality_material?: DiagnosisTaskAdvGetV2DataTaskListIsEcpHighQualityMaterial;
  is_first_publish_material?: DiagnosisTaskAdvGetV2DataTaskListIsFirstPublishMaterial;
  is_inefficient_material?: DiagnosisTaskAdvGetV2DataTaskListIsInefficientMaterial;
  material_id?: number | string;
  not_ad_high_quality_reason?: string[];
  not_ecp_high_quality_reason?: string[];
  status: DiagnosisTaskAdvGetV2DataTaskListStatus;
  task_id: number | string;
  video_id: string;
}

