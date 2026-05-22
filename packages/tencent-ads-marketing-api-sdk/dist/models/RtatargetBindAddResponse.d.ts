import type { ApiErrorStruct, RtatargetBindAddResponseData } from "../models";
export interface RtatargetBindAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindAddResponseData;
}
