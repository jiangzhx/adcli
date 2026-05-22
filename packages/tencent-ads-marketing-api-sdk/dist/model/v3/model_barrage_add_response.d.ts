import type { ApiErrorStruct, BarrageAddResponseData } from "../v3/index";
export interface BarrageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageAddResponseData;
}
