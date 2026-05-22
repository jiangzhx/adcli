import type { ApiErrorStruct, UserOrganizationAuthenticationGetResponseData } from "../v3/index";
export interface UserOrganizationAuthenticationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserOrganizationAuthenticationGetResponseData;
}
