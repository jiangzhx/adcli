import type { ApiErrorStruct, LocalStoresAddResponseData } from "../v3/index";
export interface LocalStoresAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStoresAddResponseData;
}
