import type { ApiErrorStruct, MaterialLabelsGetResponseData } from "../model/index";
export interface MaterialLabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsGetResponseData;
}
