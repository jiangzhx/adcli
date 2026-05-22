import type { ApiErrorStruct, ComponentsGetResponseData } from "../models";
export interface ComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsGetResponseData;
}
