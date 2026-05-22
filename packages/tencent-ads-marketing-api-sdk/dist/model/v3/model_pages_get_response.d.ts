import type { ApiErrorStruct, PagesGetResponseData } from "../v3/index";
export interface PagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PagesGetResponseData;
}
