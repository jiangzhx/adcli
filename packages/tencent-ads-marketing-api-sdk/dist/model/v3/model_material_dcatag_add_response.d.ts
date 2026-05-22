import type { ApiErrorStruct, MaterialDcatagAddResponseData } from "../v3/index";
export interface MaterialDcatagAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcatagAddResponseData;
}
