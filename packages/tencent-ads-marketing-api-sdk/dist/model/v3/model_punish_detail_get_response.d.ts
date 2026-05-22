import type { ApiErrorStruct, PunishDetailGetResponseData } from "../v3/index";
export interface PunishDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishDetailGetResponseData;
}
