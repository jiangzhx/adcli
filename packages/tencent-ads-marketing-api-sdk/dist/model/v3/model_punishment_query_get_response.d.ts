import type { ApiErrorStruct, PunishmentQueryGetResponseData } from "../v3/index";
export interface PunishmentQueryGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishmentQueryGetResponseData;
}
