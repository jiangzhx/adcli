import type { ApiErrorStruct, OrganizationAccountRelationGetResponseData } from "../v3/index";
export interface OrganizationAccountRelationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OrganizationAccountRelationGetResponseData;
}
