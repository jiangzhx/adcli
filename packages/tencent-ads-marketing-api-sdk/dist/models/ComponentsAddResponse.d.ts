import type { ApiErrorStruct, ComponentsAddResponseData } from "../models";
export interface ComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsAddResponseData;
}
