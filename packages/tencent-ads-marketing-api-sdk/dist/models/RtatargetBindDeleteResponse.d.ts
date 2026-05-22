import type { ApiErrorStruct, RtatargetBindDeleteResponseData } from "../models";
export interface RtatargetBindDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindDeleteResponseData;
}
