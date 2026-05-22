import type { ApiErrorStruct, CustomTagFilesGetResponseData } from "../models";
export interface CustomTagFilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagFilesGetResponseData;
}
