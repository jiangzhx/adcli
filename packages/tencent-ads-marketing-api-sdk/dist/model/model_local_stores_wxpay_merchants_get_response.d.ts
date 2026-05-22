import type { ApiErrorStruct, LocalStoresWxpayMerchantsGetResponseData } from "../model/index";
export interface LocalStoresWxpayMerchantsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresWxpayMerchantsGetResponseData;
}
