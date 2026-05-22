import type { ApiErrorStruct, ComponentsDeleteResponseData } from "../models";
export interface ComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsDeleteResponseData;
}
