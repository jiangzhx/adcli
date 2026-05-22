import type { ApiErrorStruct, MaterialDcatagGetResponseData } from "../models";
export interface MaterialDcatagGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcatagGetResponseData;
}
