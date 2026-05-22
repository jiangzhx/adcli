import type { AdQualificationsStruct, AdditionalIndustryQualificationsStruct, IndustryQualificationsStruct } from "../model/index";
export interface QualificationsGetResponseData {
    industry_qualifications?: IndustryQualificationsStruct[];
    ad_qualifications?: AdQualificationsStruct[];
    additional_industry_qualifications?: AdditionalIndustryQualificationsStruct[];
}
