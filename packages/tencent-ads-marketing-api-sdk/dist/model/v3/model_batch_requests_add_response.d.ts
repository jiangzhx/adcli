import type { ApiErrorStruct, BatchRequestsAddResponseData } from "../v3/index";
export interface BatchRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchRequestsAddResponseData;
}
