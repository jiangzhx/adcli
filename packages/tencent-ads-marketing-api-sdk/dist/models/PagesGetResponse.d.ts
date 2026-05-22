import type { ApiErrorStruct, PagesGetResponseData } from "../models";
export interface PagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PagesGetResponseData;
}
