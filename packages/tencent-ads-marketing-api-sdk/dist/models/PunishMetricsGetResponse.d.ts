import type { ApiErrorStruct, PunishMetricsGetResponseData } from "../models";
export interface PunishMetricsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishMetricsGetResponseData;
}
