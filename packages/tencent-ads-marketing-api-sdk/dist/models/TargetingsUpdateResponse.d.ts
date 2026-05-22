import type { ApiErrorStruct, TargetingsUpdateResponseData } from "../models";
export interface TargetingsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingsUpdateResponseData;
}
