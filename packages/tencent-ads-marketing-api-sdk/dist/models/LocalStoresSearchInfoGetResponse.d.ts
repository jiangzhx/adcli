import type { ApiErrorStruct, LocalStoresSearchInfoGetResponseData } from "../models";
export interface LocalStoresSearchInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresSearchInfoGetResponseData;
}
