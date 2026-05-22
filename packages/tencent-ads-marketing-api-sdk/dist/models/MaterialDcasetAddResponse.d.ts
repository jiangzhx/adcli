import type { ApiErrorStruct, MaterialDcasetAddResponseData } from "../models";
export interface MaterialDcasetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcasetAddResponseData;
}
