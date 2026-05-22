import type { ApiErrorStruct, PunishMetricsGetResponseData } from "../v3/index";
export interface PunishMetricsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishMetricsGetResponseData;
}
