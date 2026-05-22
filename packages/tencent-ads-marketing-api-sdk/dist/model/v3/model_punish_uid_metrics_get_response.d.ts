import type { ApiErrorStruct, PunishUidMetricsGetResponseData } from "../v3/index";
export interface PunishUidMetricsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishUidMetricsGetResponseData;
}
