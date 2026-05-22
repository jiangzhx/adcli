import type { ApiErrorStruct, EcommerceOrderGetResponseData } from "../models";
export interface EcommerceOrderGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EcommerceOrderGetResponseData;
}
