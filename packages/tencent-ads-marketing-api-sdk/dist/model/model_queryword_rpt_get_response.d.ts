import type { ApiErrorStruct, QuerywordRptGetResponseData } from "../model/index";
export interface QuerywordRptGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QuerywordRptGetResponseData;
}
