import type { ApiErrorStruct, CustomTagsGetResponseData } from "../models";
export interface CustomTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomTagsGetResponseData;
}
