import type { ApiErrorStruct, LocalStoresDeleteResponseData } from "../v3/index";
export interface LocalStoresDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresDeleteResponseData;
}
