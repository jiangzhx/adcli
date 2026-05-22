import type { ApiErrorStruct, TargetingsUpdateResponseData } from "../model/index";
export interface TargetingsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsUpdateResponseData;
}
