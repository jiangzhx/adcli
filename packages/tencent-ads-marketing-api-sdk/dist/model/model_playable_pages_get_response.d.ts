import type { ApiErrorStruct, PlayablePagesGetResponseData } from "../model/index";
export interface PlayablePagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PlayablePagesGetResponseData;
}
