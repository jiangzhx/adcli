import type { ApiErrorStruct, DynamicAdVideoAddResponseData } from "../v3/index";
export interface DynamicAdVideoAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoAddResponseData;
}
