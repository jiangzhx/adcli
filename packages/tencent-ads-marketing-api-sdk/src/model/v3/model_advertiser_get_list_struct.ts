// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_get_list_struct.go
// Do not edit manually.

import type { AdvertiserOperatorStruct, CustomerRegistrationType, CustomerSystemStatus, IndividualQualificationRsp, WebsiteReadStruct } from "../v3/index";

export interface AdvertiserGetListStruct {
  account_id?: number | string;
  daily_budget?: number;
  registration_type?: CustomerRegistrationType;
  corporation_name?: string;
  corporation_licence?: string;
  certification_image_id?: string;
  certification_image?: string;
  individual_qualification?: IndividualQualificationRsp;
  area_code?: number;
  mdm_id?: number | string;
  mdm_name?: string;
  system_industry_id?: number | string;
  customized_industry?: string;
  introduction_url?: string;
  corporate_brand_name?: string;
  memo?: string;
  system_status?: CustomerSystemStatus;
  reject_message?: string;
  is_adx?: boolean;
  business_alias?: string;
  contact_person?: string;
  contact_person_email?: string;
  contact_person_telephone?: string;
  contact_person_mobile?: string;
  websites?: WebsiteReadStruct[];
  agency_account_id?: number | string;
  operators?: AdvertiserOperatorStruct[];
}

