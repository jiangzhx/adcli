import type { SharedAccountStruct } from "../models";
export interface ComponentSharingUpdateRequest {
    organization_id?: number | string;
    shared_account_list?: SharedAccountStruct[];
    component_id?: number | string;
}
