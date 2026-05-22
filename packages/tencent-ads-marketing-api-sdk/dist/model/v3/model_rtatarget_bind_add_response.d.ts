import type { ApiErrorStruct, RtatargetBindAddResponseData } from "../v3/index";
export interface RtatargetBindAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindAddResponseData;
}
