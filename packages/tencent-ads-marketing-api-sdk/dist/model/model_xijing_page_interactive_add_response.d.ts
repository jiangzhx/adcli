import type { ApiErrorStruct, CreatePageResponse } from "../model/index";
export interface XijingPageInteractiveAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreatePageResponse[];
}
