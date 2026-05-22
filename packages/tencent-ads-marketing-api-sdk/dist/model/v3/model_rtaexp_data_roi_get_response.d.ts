import type { ApiErrorStruct, RtaexpDataRoiGetResponseData } from "../v3/index";
export interface RtaexpDataRoiGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpDataRoiGetResponseData;
}
