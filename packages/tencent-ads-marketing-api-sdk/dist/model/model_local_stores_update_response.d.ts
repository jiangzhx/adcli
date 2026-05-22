import type { ApiErrorStruct, LocalStoresUpdateResponseData } from "../model/index";
export interface LocalStoresUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresUpdateResponseData;
}
