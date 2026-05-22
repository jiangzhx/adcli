import type { ApiErrorStruct, ProgrammedUpdateResponseData } from "../model/index";
export interface ProgrammedUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedUpdateResponseData;
}
