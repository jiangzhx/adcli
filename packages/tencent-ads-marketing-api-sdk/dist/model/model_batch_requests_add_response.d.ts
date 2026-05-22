import type { ApiErrorStruct, BatchRequestsAddResponseData } from "../model/index";
export interface BatchRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchRequestsAddResponseData;
}
