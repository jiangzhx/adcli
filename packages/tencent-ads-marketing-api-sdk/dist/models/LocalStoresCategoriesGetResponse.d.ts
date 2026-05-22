import type { ApiErrorStruct, LocalStoresCategoriesGetResponseData } from "../models";
export interface LocalStoresCategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresCategoriesGetResponseData;
}
