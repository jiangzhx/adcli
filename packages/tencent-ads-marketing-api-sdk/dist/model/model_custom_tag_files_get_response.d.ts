import type { ApiErrorStruct, CustomTagFilesGetResponseData } from "../model/index";
export interface CustomTagFilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagFilesGetResponseData;
}
