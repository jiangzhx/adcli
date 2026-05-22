import type { ApiErrorStruct, PageOperateResponses } from "../model/index";
export interface XijingPageUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PageOperateResponses[];
}
