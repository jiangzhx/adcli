import type { ApiErrorStruct, CreativeComponentsAddResponseData } from "../models";
export interface CreativeComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsAddResponseData;
}
