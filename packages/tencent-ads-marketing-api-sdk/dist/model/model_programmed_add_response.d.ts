import type { ApiErrorStruct, ProgrammedAddResponseData } from "../model/index";
export interface ProgrammedAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedAddResponseData;
}
