import type { ApiErrorStruct, UserOrganizationAuthenticationGetResponseData } from "../models";
export interface UserOrganizationAuthenticationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UserOrganizationAuthenticationGetResponseData;
}
