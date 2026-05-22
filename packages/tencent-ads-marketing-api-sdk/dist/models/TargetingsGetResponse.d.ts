import type { ApiErrorStruct, TargetingsGetResponseData } from "../models";
export interface TargetingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsGetResponseData;
}
