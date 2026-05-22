import type { ApiErrorStruct, TargetingsDeleteResponseData } from "../model/index";
export interface TargetingsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsDeleteResponseData;
}
