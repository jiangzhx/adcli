import type { ApiErrorStruct, MaterialLabelsDeleteResponseData } from "../models";
export interface MaterialLabelsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsDeleteResponseData;
}
