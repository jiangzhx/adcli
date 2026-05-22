import type { AdQualificationsSpec, AdditionalIndustryQualificationsSpec, IndustryQualificationsSpec } from "../model/index";
export interface QualificationSpec {
    industry_spec?: IndustryQualificationsSpec;
    ad_spec?: AdQualificationsSpec;
    additional_industry_spec?: AdditionalIndustryQualificationsSpec;
}
