import type { ApiErrorStruct, MaterialLabelsGetResponseData } from "../v3/index";
export interface MaterialLabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialLabelsGetResponseData;
}
