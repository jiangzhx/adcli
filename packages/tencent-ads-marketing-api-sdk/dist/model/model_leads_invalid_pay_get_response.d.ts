import type { ApiErrorStruct, LeadsInvalidPayGetResponseData } from "../model/index";
export interface LeadsInvalidPayGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsInvalidPayGetResponseData;
}
