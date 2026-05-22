import type { ApiErrorStruct, MaterialLabelsGetResponseData } from "../models";
export interface MaterialLabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsGetResponseData;
}
