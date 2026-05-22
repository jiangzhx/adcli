import type { ApiErrorStruct, TargetingsDeleteResponseData } from "../models";
export interface TargetingsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsDeleteResponseData;
}
