import type { ApiErrorStruct, MaterialDcatagAddResponseData } from "../models";
export interface MaterialDcatagAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcatagAddResponseData;
}
