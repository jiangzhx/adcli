import type { ApiErrorStruct, OuterCluesUpdateResponseData } from "../model/index";
export interface OuterCluesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesUpdateResponseData;
}
