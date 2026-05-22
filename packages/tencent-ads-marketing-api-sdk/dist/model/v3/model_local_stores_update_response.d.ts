import type { ApiErrorStruct, LocalStoresUpdateResponseData } from "../v3/index";
export interface LocalStoresUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresUpdateResponseData;
}
