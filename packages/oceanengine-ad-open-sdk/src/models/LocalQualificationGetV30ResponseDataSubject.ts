// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalQualificationGetV30DataSubjectCheckType, LocalQualificationGetV30DataSubjectCompanyType, LocalQualificationGetV30DataSubjectQualificationType, LocalQualificationGetV30DataSubjectStatus } from "../models";

export interface LocalQualificationGetV30ResponseDataSubject {
  address?: string;
  attachment_id?: string;
  check_type?: LocalQualificationGetV30DataSubjectCheckType;
  company_name?: string;
  company_type?: LocalQualificationGetV30DataSubjectCompanyType;
  effective_date?: string;
  has_effective_date?: boolean;
  picture_url?: string;
  proprietor_name?: string;
  qualification_code?: string;
  qualification_id?: number;
  qualification_type?: LocalQualificationGetV30DataSubjectQualificationType;
  registered_city_name?: string;
  registered_nation_name?: string;
  registered_province_name?: string;
  reject_reason?: string;
  status?: LocalQualificationGetV30DataSubjectStatus;
}

