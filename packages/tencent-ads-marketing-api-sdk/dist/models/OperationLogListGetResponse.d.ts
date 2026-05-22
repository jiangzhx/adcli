import type { ApiErrorStruct, OperationLogListGetResponseData } from "../models";
export interface OperationLogListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OperationLogListGetResponseData;
}
