import type { ApiErrorStruct, LocalStoresSearchInfoGetResponseData } from "../model/index";
export interface LocalStoresSearchInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresSearchInfoGetResponseData;
}
