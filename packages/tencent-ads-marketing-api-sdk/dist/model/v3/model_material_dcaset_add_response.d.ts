import type { ApiErrorStruct, MaterialDcasetAddResponseData } from "../v3/index";
export interface MaterialDcasetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialDcasetAddResponseData;
}
