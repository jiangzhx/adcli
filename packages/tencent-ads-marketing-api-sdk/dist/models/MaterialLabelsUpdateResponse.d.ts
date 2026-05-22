import type { ApiErrorStruct, MaterialLabelsUpdateResponseData } from "../models";
export interface MaterialLabelsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsUpdateResponseData;
}
