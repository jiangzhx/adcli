import type { ApiErrorStruct, DynamicAdVideoAddResponseData } from "../model/index";
export interface DynamicAdVideoAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoAddResponseData;
}
