import type { ApiErrorStruct, ProgrammedUpdateResponseData } from "../models";
export interface ProgrammedUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedUpdateResponseData;
}
