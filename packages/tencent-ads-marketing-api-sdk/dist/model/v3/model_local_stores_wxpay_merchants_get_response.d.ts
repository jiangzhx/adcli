import type { ApiErrorStruct, LocalStoresWxpayMerchantsGetResponseData } from "../v3/index";
export interface LocalStoresWxpayMerchantsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresWxpayMerchantsGetResponseData;
}
