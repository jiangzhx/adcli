import type { ApiErrorStruct, ComponentsGetResponseData } from "../v3/index";
export interface ComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsGetResponseData;
}
