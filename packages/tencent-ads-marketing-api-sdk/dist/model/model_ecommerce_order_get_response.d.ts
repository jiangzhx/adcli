import type { ApiErrorStruct, EcommerceOrderGetResponseData } from "../model/index";
export interface EcommerceOrderGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EcommerceOrderGetResponseData;
}
