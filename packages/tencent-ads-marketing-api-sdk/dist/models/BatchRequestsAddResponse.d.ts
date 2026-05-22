import type { ApiErrorStruct, BatchRequestsAddResponseData } from "../models";
export interface BatchRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchRequestsAddResponseData;
}
