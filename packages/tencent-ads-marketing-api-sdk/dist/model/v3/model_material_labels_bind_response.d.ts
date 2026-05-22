import type { ApiErrorStruct, MaterialLabelsBindResponseData } from "../v3/index";
export interface MaterialLabelsBindResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsBindResponseData;
}
