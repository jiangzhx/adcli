import type { ApiErrorStruct, CustomTagsAddResponseData } from "../model/index";
export interface CustomTagsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagsAddResponseData;
}
