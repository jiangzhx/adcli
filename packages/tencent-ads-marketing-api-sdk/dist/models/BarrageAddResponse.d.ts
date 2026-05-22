import type { ApiErrorStruct, BarrageAddResponseData } from "../models";
export interface BarrageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageAddResponseData;
}
