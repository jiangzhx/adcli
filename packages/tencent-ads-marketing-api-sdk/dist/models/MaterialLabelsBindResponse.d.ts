import type { ApiErrorStruct, MaterialLabelsBindResponseData } from "../models";
export interface MaterialLabelsBindResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsBindResponseData;
}
