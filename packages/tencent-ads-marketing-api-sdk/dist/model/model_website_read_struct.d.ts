import type { WebsiteStatus } from "../model/index";
export interface WebsiteReadStruct {
    website_domain?: string;
    icp_image_id?: string;
    system_status?: WebsiteStatus;
    reject_message?: string;
}
