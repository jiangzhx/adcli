import type { ApiErrorStruct, OuterCluesAddResponseData } from "../models";
export interface OuterCluesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesAddResponseData;
}
