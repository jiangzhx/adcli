import type { ApiErrorStruct, DataSetGetResponseData } from "../models";
export interface DataSetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSetGetResponseData;
}
