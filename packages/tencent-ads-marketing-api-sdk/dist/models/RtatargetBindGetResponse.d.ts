import type { ApiErrorStruct, RtatargetBindGetResponseData } from "../models";
export interface RtatargetBindGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RtatargetBindGetResponseData;
}
