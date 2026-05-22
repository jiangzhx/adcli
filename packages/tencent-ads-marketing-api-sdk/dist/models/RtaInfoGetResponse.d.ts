import type { ApiErrorStruct, RtaInfoGetResponseData } from "../models";
export interface RtaInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaInfoGetResponseData;
}
