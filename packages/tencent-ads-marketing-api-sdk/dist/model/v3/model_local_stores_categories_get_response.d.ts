import type { ApiErrorStruct, LocalStoresCategoriesGetResponseData } from "../v3/index";
export interface LocalStoresCategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresCategoriesGetResponseData;
}
