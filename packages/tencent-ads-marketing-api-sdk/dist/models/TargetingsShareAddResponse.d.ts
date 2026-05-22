import type { ApiErrorStruct, TargetingsShareAddResponseData } from "../models";
export interface TargetingsShareAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsShareAddResponseData;
}
