import type { ApiErrorStruct, LeadsInvalidPayGetResponseData } from "../models";
export interface LeadsInvalidPayGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsInvalidPayGetResponseData;
}
