import type { ApiErrorStruct, RtatargetBindDeleteResponseData } from "../v3/index";
export interface RtatargetBindDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindDeleteResponseData;
}
