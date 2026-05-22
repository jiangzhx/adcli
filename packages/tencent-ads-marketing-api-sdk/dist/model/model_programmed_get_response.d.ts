import type { ApiErrorStruct, ProgrammedGetResponseData } from "../model/index";
export interface ProgrammedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedGetResponseData;
}
