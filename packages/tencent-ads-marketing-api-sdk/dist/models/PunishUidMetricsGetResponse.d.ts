import type { ApiErrorStruct, PunishUidMetricsGetResponseData } from "../models";
export interface PunishUidMetricsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishUidMetricsGetResponseData;
}
