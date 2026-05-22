// Generated from tencentad/marketing-api-go-sdk pkg/model/model_additional_industry_qualifications_struct.go
// Do not edit manually.

import type { QualificationStatus } from "../model/index";

export interface AdditionalIndustryQualificationsStruct {
  qualification_id?: number | string;
  system_industry_id?: number | string;
  business_scope_id?: number | string;
  qualification_code?: string;
  image_id_list?: string[];
  qualification_status?: QualificationStatus;
  expired_date?: string;
  reject_message?: string;
  created_time?: number;
  last_modified_time?: number;
}

