import type { IndividualQualification } from "../model/index";
export interface AdvertiserAddRequest {
    corporation_name?: string;
    corporation_licence?: string;
    certification_image_id?: string;
    individual_qualification?: IndividualQualification;
    system_industry_id?: number | string;
    area_code?: number;
    corporate_image_name?: string;
    introduction_url?: string;
    corporate_brand_name?: string;
    contact_person_telephone?: string;
    contact_person_mobile?: string;
}
