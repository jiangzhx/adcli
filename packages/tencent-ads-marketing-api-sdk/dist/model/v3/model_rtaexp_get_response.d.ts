import type { ApiErrorStruct, RtaexpGetResponseData } from "../v3/index";
export interface RtaexpGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpGetResponseData;
}
