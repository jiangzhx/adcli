import type { ApiErrorStruct, RtaInfoGetResponseData } from "../v3/index";
export interface RtaInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaInfoGetResponseData;
}
