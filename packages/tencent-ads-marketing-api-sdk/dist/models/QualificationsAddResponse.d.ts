import type { ApiErrorStruct, QualificationsAddResponseData } from "../models";
export interface QualificationsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsAddResponseData;
}
