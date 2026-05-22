// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DiagnosisTaskAdvListV2DataTaskListIsAdHighQualityMaterial, DiagnosisTaskAdvListV2DataTaskListIsEcpHighQualityMaterial, DiagnosisTaskAdvListV2DataTaskListIsFirstPublishMaterial, DiagnosisTaskAdvListV2DataTaskListIsInefficientMaterial, DiagnosisTaskAdvListV2DataTaskListStatus } from "../models";

export interface DiagnosisTaskAdvListV2ResponseDataTaskListInner {
  advertiser_id?: number | string;
  is_ad_high_quality_material?: DiagnosisTaskAdvListV2DataTaskListIsAdHighQualityMaterial;
  is_ecp_high_quality_material?: DiagnosisTaskAdvListV2DataTaskListIsEcpHighQualityMaterial;
  is_first_publish_material?: DiagnosisTaskAdvListV2DataTaskListIsFirstPublishMaterial;
  is_inefficient_material?: DiagnosisTaskAdvListV2DataTaskListIsInefficientMaterial;
  material_id?: number | string;
  not_ad_high_quality_reason?: string[];
  not_ecp_high_quality_reason?: string[];
  status: DiagnosisTaskAdvListV2DataTaskListStatus;
  task_id: number | string;
  video_id: string;
}

