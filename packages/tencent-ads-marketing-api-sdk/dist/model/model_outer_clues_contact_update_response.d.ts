import type { ApiErrorStruct, OuterCluesContactUpdateResponseData } from "../model/index";
export interface OuterCluesContactUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesContactUpdateResponseData;
}
