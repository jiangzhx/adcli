// Generated from tencentad/marketing-api-go-sdk pkg/model/model_qualifications_get_response_data.go
// Do not edit manually.

import type { AdQualificationsStruct, AdditionalIndustryQualificationsStruct, IndustryQualificationsStruct } from "../model/index";

export interface QualificationsGetResponseData {
  industry_qualifications?: IndustryQualificationsStruct[];
  ad_qualifications?: AdQualificationsStruct[];
  additional_industry_qualifications?: AdditionalIndustryQualificationsStruct[];
}

