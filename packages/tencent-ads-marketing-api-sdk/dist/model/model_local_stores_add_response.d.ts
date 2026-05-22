import type { ApiErrorStruct, LocalStoresAddResponseData } from "../model/index";
export interface LocalStoresAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddResponseData;
}
