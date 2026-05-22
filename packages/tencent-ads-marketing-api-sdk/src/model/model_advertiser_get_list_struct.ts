// Generated from tencentad/marketing-api-go-sdk pkg/model/model_advertiser_get_list_struct.go
// Do not edit manually.

import type { AdvertiserOperatorStruct, CustomerSystemStatus, IndividualQualificationRead, WebsiteReadStruct } from "../model/index";

export interface AdvertiserGetListStruct {
  account_id?: number | string;
  daily_budget?: number;
  system_status?: CustomerSystemStatus;
  reject_message?: string;
  corporation_name?: string;
  corporation_licence?: string;
  certification_image_id?: string;
  certification_image?: string;
  identity_number?: string;
  individual_qualification?: IndividualQualificationRead;
  system_industry_id?: number | string;
  customized_industry?: string;
  introduction_url?: string;
  corporate_brand_name?: string;
  contact_person?: string;
  contact_person_email?: string;
  contact_person_telephone?: string;
  contact_person_mobile?: string;
  websites?: WebsiteReadStruct[];
  mdm_id?: number | string;
  mdm_name?: string;
  agency_account_id?: number | string;
  operators?: AdvertiserOperatorStruct[];
  memo?: string;
  area_code?: number;
}

