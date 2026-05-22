import type { ApiErrorStruct, LocalStoresCategoriesGetResponseData } from "../model/index";
export interface LocalStoresCategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresCategoriesGetResponseData;
}
