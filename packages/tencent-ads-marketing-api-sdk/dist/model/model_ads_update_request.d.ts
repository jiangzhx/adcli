import type { AdStatus } from "../model/index";
export interface AdsUpdateRequest {
    ad_id?: number | string;
    ad_name?: string;
    configured_status?: AdStatus;
    impression_tracking_url?: string;
    click_tracking_url?: string;
    feeds_interaction_enabled?: boolean;
    account_id?: number | string;
}
