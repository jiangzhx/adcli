import type { ApiErrorStruct, ProgrammedAddResponseData } from "../models";
export interface ProgrammedAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedAddResponseData;
}
