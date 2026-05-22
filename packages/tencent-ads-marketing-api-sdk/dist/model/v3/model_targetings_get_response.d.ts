import type { ApiErrorStruct, TargetingsGetResponseData } from "../v3/index";
export interface TargetingsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsGetResponseData;
}
