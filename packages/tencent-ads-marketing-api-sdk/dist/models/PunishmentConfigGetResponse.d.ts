import type { ApiErrorStruct, PunishmentConfigGetResponseData } from "../models";
export interface PunishmentConfigGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishmentConfigGetResponseData;
}
