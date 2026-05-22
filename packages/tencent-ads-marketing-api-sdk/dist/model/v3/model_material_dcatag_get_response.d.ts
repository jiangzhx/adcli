import type { ApiErrorStruct, MaterialDcatagGetResponseData } from "../v3/index";
export interface MaterialDcatagGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcatagGetResponseData;
}
