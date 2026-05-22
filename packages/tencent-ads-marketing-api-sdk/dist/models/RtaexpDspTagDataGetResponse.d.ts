import type { ApiErrorStruct, RtaexpDspTagDataGetResponseData } from "../models";
export interface RtaexpDspTagDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpDspTagDataGetResponseData;
}
