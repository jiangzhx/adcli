import type { ApiErrorStruct, LocalStoresWxpayMerchantsGetResponseData } from "../models";
export interface LocalStoresWxpayMerchantsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresWxpayMerchantsGetResponseData;
}
