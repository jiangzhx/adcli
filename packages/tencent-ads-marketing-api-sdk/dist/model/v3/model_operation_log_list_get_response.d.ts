import type { ApiErrorStruct, OperationLogListGetResponseData } from "../v3/index";
export interface OperationLogListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OperationLogListGetResponseData;
}
