import type { AdStatus } from "../models";
export interface UpdateCampaignConfiguredStatusItem {
    campaign_id?: number | string;
    configured_status?: AdStatus;
}
