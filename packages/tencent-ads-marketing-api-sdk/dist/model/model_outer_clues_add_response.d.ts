import type { ApiErrorStruct, OuterCluesAddResponseData } from "../model/index";
export interface OuterCluesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesAddResponseData;
}
