import type { ApiErrorStruct, BarrageGetResponseData } from "../model/index";
export interface BarrageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageGetResponseData;
}
