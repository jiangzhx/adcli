import type { ApiErrorStruct, CustomTagFilesAddResponseData } from "../models";
export interface CustomTagFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagFilesAddResponseData;
}
