import type { ApiErrorStruct, BusinessMdmAccountRelationsGetResponseData } from "../model/index";
export interface BusinessMdmAccountRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessMdmAccountRelationsGetResponseData;
}
