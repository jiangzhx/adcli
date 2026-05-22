import type { OrganizationAuthenticationStatus } from "../v3/index";
export interface UserOrganizationAuthenticationGetListStruct {
    account_id?: number | string;
    authentication_status?: OrganizationAuthenticationStatus;
}
