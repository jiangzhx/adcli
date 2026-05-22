import type { ApiErrorStruct, MaterialLabelsAddResponseData } from "../v3/index";
export interface MaterialLabelsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsAddResponseData;
}
