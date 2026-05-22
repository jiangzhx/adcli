import type { ApiErrorStruct, LocalStoresGetResponseData } from "../models";
export interface LocalStoresGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresGetResponseData;
}
