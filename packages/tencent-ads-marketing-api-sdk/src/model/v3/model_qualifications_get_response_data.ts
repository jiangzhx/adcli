// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_qualifications_get_response_data.go
// Do not edit manually.

import type { AdQualificationsStruct, IndustryQualificationsStruct } from "../v3/index";

export interface QualificationsGetResponseData {
  industry_qualifications?: IndustryQualificationsStruct[];
  ad_qualifications?: AdQualificationsStruct[];
  additional_industry_qualifications?: IndustryQualificationsStruct[];
}

