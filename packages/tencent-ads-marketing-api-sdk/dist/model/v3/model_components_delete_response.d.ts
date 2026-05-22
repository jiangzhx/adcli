import type { ApiErrorStruct, ComponentsDeleteResponseData } from "../v3/index";
export interface ComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsDeleteResponseData;
}
