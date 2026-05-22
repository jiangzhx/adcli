import type { SiteSet } from "../models";
export interface ComplianceValidationGetRequest {
    account_id?: number | string;
    site_set?: SiteSet;
    image_id?: string;
    text?: string;
}
