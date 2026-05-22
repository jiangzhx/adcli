import type { ApiErrorStruct, LocalStoresUpdateResponseData } from "../models";
export interface LocalStoresUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresUpdateResponseData;
}
