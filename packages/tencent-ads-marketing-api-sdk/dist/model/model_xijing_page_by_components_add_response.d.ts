import type { ApiErrorStruct, CreatePageResponse } from "../model/index";
export interface XijingPageByComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreatePageResponse[];
}
