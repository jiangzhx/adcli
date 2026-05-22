import type { ApiErrorStruct, TargetingsAddResponseData } from "../models";
export interface TargetingsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsAddResponseData;
}
