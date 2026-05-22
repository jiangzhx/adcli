import type { ApiErrorStruct, DataSetAddResponseData } from "../model/index";
export interface DataSetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSetAddResponseData;
}
