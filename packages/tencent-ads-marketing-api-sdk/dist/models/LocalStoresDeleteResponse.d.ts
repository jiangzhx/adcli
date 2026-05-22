import type { ApiErrorStruct, LocalStoresDeleteResponseData } from "../models";
export interface LocalStoresDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresDeleteResponseData;
}
