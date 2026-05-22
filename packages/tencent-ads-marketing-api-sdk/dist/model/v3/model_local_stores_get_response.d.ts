import type { ApiErrorStruct, LocalStoresGetResponseData } from "../v3/index";
export interface LocalStoresGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresGetResponseData;
}
