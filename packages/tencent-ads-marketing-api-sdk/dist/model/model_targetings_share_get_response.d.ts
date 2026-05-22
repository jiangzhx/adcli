import type { ApiErrorStruct, TargetingsShareGetResponseData } from "../model/index";
export interface TargetingsShareGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsShareGetResponseData;
}
