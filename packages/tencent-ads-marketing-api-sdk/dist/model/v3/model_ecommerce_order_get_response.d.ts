import type { ApiErrorStruct, EcommerceOrderGetResponseData } from "../v3/index";
export interface EcommerceOrderGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EcommerceOrderGetResponseData;
}
