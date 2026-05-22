import type { ApiErrorStruct, TargetcpaTagGetResponseData } from "../models";
export interface TargetcpaTagGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetcpaTagGetResponseData;
}
