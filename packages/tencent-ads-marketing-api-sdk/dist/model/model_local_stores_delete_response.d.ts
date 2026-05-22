import type { ApiErrorStruct, LocalStoresDeleteResponseData } from "../model/index";
export interface LocalStoresDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresDeleteResponseData;
}
