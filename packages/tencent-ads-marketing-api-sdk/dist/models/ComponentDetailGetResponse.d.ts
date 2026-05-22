import type { ApiErrorStruct, ComponentDetailGetResponseData } from "../models";
export interface ComponentDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentDetailGetResponseData;
}
