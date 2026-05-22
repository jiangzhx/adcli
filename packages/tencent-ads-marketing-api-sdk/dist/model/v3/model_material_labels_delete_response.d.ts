import type { ApiErrorStruct, MaterialLabelsDeleteResponseData } from "../v3/index";
export interface MaterialLabelsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsDeleteResponseData;
}
