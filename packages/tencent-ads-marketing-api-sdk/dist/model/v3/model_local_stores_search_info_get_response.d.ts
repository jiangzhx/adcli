import type { ApiErrorStruct, LocalStoresSearchInfoGetResponseData } from "../v3/index";
export interface LocalStoresSearchInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresSearchInfoGetResponseData;
}
