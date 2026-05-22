import type { ApiErrorStruct, PlayablePagesGetResponseData } from "../models";
export interface PlayablePagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PlayablePagesGetResponseData;
}
