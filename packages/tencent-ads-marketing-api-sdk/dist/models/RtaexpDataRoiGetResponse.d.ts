import type { ApiErrorStruct, RtaexpDataRoiGetResponseData } from "../models";
export interface RtaexpDataRoiGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtaexpDataRoiGetResponseData;
}
