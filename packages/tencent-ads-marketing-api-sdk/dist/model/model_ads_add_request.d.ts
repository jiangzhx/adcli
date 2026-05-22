import type { AdStatus } from "../model/index";
export interface AdsAddRequest {
    adgroup_id?: number | string;
    adcreative_id?: number | string;
    ad_name?: string;
    configured_status?: AdStatus;
    impression_tracking_url?: string;
    click_tracking_url?: string;
    feeds_interaction_enabled?: boolean;
    account_id?: number | string;
}
