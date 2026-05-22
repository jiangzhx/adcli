import type { ApiErrorStruct, PunishmentConfigGetResponseData } from "../v3/index";
export interface PunishmentConfigGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishmentConfigGetResponseData;
}
