// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_industry_qualifications_struct.go
// Do not edit manually.

import type { ExpandFieldStruct, QualificationStatus } from "../v3/index";

export interface IndustryQualificationsStruct {
  qualification_id?: number | string;
  system_industry_id?: number | string;
  business_scope_id?: number | string;
  qualification_code?: string;
  image_id_list?: string[];
  expand_field_list?: ExpandFieldStruct[];
  qualification_status?: QualificationStatus;
  expired_date?: string;
  reject_message?: string;
  created_time?: number;
  last_modified_time?: number;
}

