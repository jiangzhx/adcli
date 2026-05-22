import type { ApiErrorStruct, PagesGetResponseData } from "../model/index";
export interface PagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PagesGetResponseData;
}
