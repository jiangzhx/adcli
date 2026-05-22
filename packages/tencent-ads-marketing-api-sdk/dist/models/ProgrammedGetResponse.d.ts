import type { ApiErrorStruct, ProgrammedGetResponseData } from "../models";
export interface ProgrammedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedGetResponseData;
}
