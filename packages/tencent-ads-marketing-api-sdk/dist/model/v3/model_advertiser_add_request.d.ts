import type { CustomerRegistrationType, IndividualQualification } from "../v3/index";
export interface AdvertiserAddRequest {
    agency_id?: number | string;
    registration_type?: CustomerRegistrationType;
    corporation_name?: string;
    corporation_licence?: string;
    certification_image_id?: string;
    individual_qualification?: IndividualQualification;
    area_code?: number;
    system_industry_id?: number | string;
    introduction_url?: string;
    daily_budget?: number;
    corporate_brand_name?: string;
    is_adx?: boolean;
    contact_person_telephone?: string;
    contact_person_mobile?: string;
}
