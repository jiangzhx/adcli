import type { ApiErrorStruct, DataSetAddResponseData } from "../models";
export interface DataSetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSetAddResponseData;
}
