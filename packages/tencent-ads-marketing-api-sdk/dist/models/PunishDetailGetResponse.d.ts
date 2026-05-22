import type { ApiErrorStruct, PunishDetailGetResponseData } from "../models";
export interface PunishDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PunishDetailGetResponseData;
}
