import type { ApiErrorStruct, LocalStoresAddResponseData } from "../models";
export interface LocalStoresAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddResponseData;
}
