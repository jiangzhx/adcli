import type { ApiErrorStruct, CustomTagFilesAddResponseData } from "../model/index";
export interface CustomTagFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagFilesAddResponseData;
}
