import type { UpdateConfiguredStatusStruct } from "../v3/index";
export interface AdgroupsUpdateConfiguredStatusRequest {
    account_id?: number | string;
    update_configured_status_spec?: UpdateConfiguredStatusStruct[];
}
