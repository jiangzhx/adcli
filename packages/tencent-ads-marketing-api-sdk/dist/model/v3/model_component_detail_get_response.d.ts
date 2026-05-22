import type { ApiErrorStruct, ComponentDetailGetResponseData } from "../v3/index";
export interface ComponentDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentDetailGetResponseData;
}
