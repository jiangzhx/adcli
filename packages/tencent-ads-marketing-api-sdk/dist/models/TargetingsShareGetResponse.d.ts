import type { ApiErrorStruct, TargetingsShareGetResponseData } from "../models";
export interface TargetingsShareGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsShareGetResponseData;
}
