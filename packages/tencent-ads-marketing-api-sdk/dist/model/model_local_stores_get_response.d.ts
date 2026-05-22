import type { ApiErrorStruct, LocalStoresGetResponseData } from "../model/index";
export interface LocalStoresGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresGetResponseData;
}
