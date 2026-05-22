import type { ApiErrorStruct, RtaexpGetResponseData } from "../models";
export interface RtaexpGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpGetResponseData;
}
