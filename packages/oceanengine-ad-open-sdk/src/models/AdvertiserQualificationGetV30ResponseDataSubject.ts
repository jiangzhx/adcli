// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserQualificationGetV30DataSubjectCheckType, AdvertiserQualificationGetV30DataSubjectCompanyType, AdvertiserQualificationGetV30DataSubjectQualificationType, AdvertiserQualificationGetV30DataSubjectStatus } from "../models";

export interface AdvertiserQualificationGetV30ResponseDataSubject {
  address?: string;
  attachment_id?: string;
  check_type?: AdvertiserQualificationGetV30DataSubjectCheckType;
  company_name?: string;
  company_type?: AdvertiserQualificationGetV30DataSubjectCompanyType;
  effective_date?: string;
  has_effective_date?: boolean;
  picture_url?: string;
  proprietor_name?: string;
  qualification_code?: string;
  qualification_id?: number;
  qualification_type?: AdvertiserQualificationGetV30DataSubjectQualificationType;
  registered_city_name?: string;
  registered_nation_name?: string;
  registered_province_name?: string;
  reject_reason?: string;
  status?: AdvertiserQualificationGetV30DataSubjectStatus;
}

