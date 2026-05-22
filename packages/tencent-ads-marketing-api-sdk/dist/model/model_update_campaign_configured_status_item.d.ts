import type { AdStatus } from "../model/index";
export interface UpdateCampaignConfiguredStatusItem {
    campaign_id?: number | string;
    configured_status?: AdStatus;
}
