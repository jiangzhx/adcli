import type { AdStatus } from "../models";
export interface UpdateAdConfiguredStatusItem {
    ad_id?: number | string;
    configured_status?: AdStatus;
}
