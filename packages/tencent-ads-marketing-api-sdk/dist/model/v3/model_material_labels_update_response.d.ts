import type { ApiErrorStruct, MaterialLabelsUpdateResponseData } from "../v3/index";
export interface MaterialLabelsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsUpdateResponseData;
}
