import type { ApiErrorStruct, TargetingsAddResponseData } from "../model/index";
export interface TargetingsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsAddResponseData;
}
