import type { ApiErrorStruct, PageOperateResponses } from "../model/index";
export interface XijingPageDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PageOperateResponses[];
}
