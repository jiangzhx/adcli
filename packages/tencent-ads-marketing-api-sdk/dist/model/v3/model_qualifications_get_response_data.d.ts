import type { AdQualificationsStruct, IndustryQualificationsStruct } from "../v3/index";
export interface QualificationsGetResponseData {
    industry_qualifications?: IndustryQualificationsStruct[];
    ad_qualifications?: AdQualificationsStruct[];
    additional_industry_qualifications?: IndustryQualificationsStruct[];
}
