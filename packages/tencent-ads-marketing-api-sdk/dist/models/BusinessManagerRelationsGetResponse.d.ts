import type { ApiErrorStruct, BusinessManagerRelationsGetResponseData } from "../models";
export interface BusinessManagerRelationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessManagerRelationsGetResponseData;
}
