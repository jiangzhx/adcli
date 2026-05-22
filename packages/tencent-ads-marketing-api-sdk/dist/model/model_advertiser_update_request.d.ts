import type { IndividualQualification, WebsiteUpdateStruct } from "../model/index";
export interface AdvertiserUpdateRequest {
    account_id?: number | string;
    daily_budget?: number;
    system_industry_id?: number | string;
    corporation_name?: string;
    corporation_licence?: string;
    certification_image_id?: string;
    individual_qualification?: IndividualQualification;
    area_code?: number;
    corporate_image_name?: string;
    introduction_url?: string;
    corporate_brand_name?: string;
    contact_person_telephone?: string;
    contact_person_mobile?: string;
    websites?: WebsiteUpdateStruct[];
}
