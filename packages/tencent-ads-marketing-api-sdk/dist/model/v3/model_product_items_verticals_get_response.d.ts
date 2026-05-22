import type { ApiErrorStruct, ProductItemsVerticalsGetResponseData } from "../v3/index";
export interface ProductItemsVerticalsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductItemsVerticalsGetResponseData;
}
