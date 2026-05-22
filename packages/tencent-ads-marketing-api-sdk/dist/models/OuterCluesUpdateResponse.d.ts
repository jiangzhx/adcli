import type { ApiErrorStruct, OuterCluesUpdateResponseData } from "../models";
export interface OuterCluesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesUpdateResponseData;
}
