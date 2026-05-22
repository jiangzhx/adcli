import type { ApiErrorStruct, TargetcpaTagGetResponseData } from "../model/index";
export interface TargetcpaTagGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetcpaTagGetResponseData;
}
