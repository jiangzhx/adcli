import type { ApiErrorStruct, RtatargetGetResponseData } from "../models";
export interface RtatargetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetGetResponseData;
}
