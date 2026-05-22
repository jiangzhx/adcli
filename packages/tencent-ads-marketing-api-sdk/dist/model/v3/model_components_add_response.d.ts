import type { ApiErrorStruct, ComponentsAddResponseData } from "../v3/index";
export interface ComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsAddResponseData;
}
