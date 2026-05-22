import type { ApiErrorStruct, MaterialLabelsAddResponseData } from "../model/index";
export interface MaterialLabelsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsAddResponseData;
}
