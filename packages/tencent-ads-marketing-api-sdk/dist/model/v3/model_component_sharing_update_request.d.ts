import type { SharedAccountStruct } from "../v3/index";
export interface ComponentSharingUpdateRequest {
    organization_id?: number | string;
    shared_account_list?: SharedAccountStruct[];
    component_id?: number | string;
}
