// Generated from tencentad/marketing-api-go-sdk pkg/model/model_qualification_spec.go
// Do not edit manually.

import type { AdQualificationsSpec, AdditionalIndustryQualificationsSpec, IndustryQualificationsSpec } from "../model/index";

export interface QualificationSpec {
  industry_spec?: IndustryQualificationsSpec;
  ad_spec?: AdQualificationsSpec;
  additional_industry_spec?: AdditionalIndustryQualificationsSpec;
}

