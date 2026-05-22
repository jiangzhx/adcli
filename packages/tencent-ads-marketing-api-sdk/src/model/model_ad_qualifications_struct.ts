// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_qualifications_struct.go
// Do not edit manually.

import type { AdQualificationSharedStatus, QualificationStatus } from "../model/index";

export interface AdQualificationsStruct {
  qualification_id?: number | string;
  qualification_code?: string;
  image_id_list?: string[];
  qualification_status?: QualificationStatus;
  expired_date?: string;
  is_mdm_shared?: AdQualificationSharedStatus;
  reject_message?: string;
  created_time?: number;
  last_modified_time?: number;
}

