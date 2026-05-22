import type { ApiErrorStruct, BarrageGetResponseData } from "../v3/index";
export interface BarrageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BarrageGetResponseData;
}
