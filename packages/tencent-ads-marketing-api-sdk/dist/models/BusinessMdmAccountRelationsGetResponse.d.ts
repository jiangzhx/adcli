import type { ApiErrorStruct, BusinessMdmAccountRelationsGetResponseData } from "../models";
export interface BusinessMdmAccountRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessMdmAccountRelationsGetResponseData;
}
