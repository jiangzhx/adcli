import type { ApiErrorStruct, QuerywordRptGetResponseData } from "../models";
export interface QuerywordRptGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QuerywordRptGetResponseData;
}
