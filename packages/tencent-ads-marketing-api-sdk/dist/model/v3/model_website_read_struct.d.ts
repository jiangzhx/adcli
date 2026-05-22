import type { WebsiteStatus } from "../v3/index";
export interface WebsiteReadStruct {
    website_domain?: string;
    icp_image_id?: string;
    system_status?: WebsiteStatus;
    reject_message?: string;
}
