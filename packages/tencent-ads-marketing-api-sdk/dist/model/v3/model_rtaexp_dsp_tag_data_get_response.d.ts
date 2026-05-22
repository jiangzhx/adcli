import type { ApiErrorStruct, RtaexpDspTagDataGetResponseData } from "../v3/index";
export interface RtaexpDspTagDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpDspTagDataGetResponseData;
}
