// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { IndividualQualification, WebsiteUpdateStruct } from "../models";

export interface AdvertiserUpdateRequest {
  account_id?: number | string;
  daily_budget?: number;
  corporation_name?: string;
  corporation_licence?: string;
  certification_image_id?: string;
  individual_qualification?: IndividualQualification;
  area_code?: number;
  system_industry_id?: number | string;
  introduction_url?: string;
  corporate_brand_name?: string;
  contact_person_telephone?: string;
  contact_person_mobile?: string;
  business_alias?: string;
  websites?: WebsiteUpdateStruct[];
}

