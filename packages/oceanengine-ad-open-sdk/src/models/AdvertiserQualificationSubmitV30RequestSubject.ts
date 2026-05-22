// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserQualificationSubmitV30SubjectCheckType, AdvertiserQualificationSubmitV30SubjectCompanyType, AdvertiserQualificationSubmitV30SubjectQualificationType } from "../models";

export interface AdvertiserQualificationSubmitV30RequestSubject {
  address?: string;
  attachment_id: string;
  check_type: AdvertiserQualificationSubmitV30SubjectCheckType;
  company_name: string;
  company_type: AdvertiserQualificationSubmitV30SubjectCompanyType;
  effective_date?: string;
  has_effective_date: boolean;
  proprietor_name: string;
  qualification_code: string;
  qualification_id?: number;
  qualification_type: AdvertiserQualificationSubmitV30SubjectQualificationType;
  registered_city_name?: string;
  registered_nation_name: string;
  registered_province_name?: string;
}

