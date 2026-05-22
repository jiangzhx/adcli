import type { ApiErrorStruct, QualificationsAddResponseData } from "../v3/index";
export interface QualificationsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsAddResponseData;
}
