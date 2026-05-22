import type { AdStatus } from "../model/index";
export interface UpdateAdConfiguredStatusItem {
    ad_id?: number | string;
    configured_status?: AdStatus;
}
