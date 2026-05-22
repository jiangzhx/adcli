import type { ApiErrorStruct, TargetingsGetResponseData } from "../model/index";
export interface TargetingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsGetResponseData;
}
