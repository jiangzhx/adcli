import type { LinkLandingPageAccess } from "../v3/index";
export interface ConversionLinkInfo {
    conversion_link_id?: number | string;
    conversion_link_desc?: string;
    landing_page_access?: LinkLandingPageAccess;
}
