import type { ApiErrorStruct, ProductItemsVerticalsGetResponseData } from "../model/index";
export interface ProductItemsVerticalsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsVerticalsGetResponseData;
}
