import type { ApiErrorStruct, OrganizationAccountRelationGetResponseData } from "../models";
export interface OrganizationAccountRelationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OrganizationAccountRelationGetResponseData;
}
