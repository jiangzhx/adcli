import type { AudienceSpec, AudienceType } from "../models";
export interface CustomAudiencesAddRequest {
    account_id?: number | string;
    name?: string;
    type?: AudienceType;
    outer_audience_id?: string;
    description?: string;
    audience_spec?: AudienceSpec;
}
