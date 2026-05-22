import type { ApiErrorStruct, CustomTagsAddResponseData } from "../models";
export interface CustomTagsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagsAddResponseData;
}
