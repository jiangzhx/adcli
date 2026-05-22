import type { ApiErrorStruct, DataSetGetResponseData } from "../model/index";
export interface DataSetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSetGetResponseData;
}
