import type { ApiErrorStruct, RtatargetGetResponseData } from "../v3/index";
export interface RtatargetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetGetResponseData;
}
