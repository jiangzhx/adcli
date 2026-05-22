import type { ApiErrorStruct, ProgrammedGetResponseData } from "../v3/index";
export interface ProgrammedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedGetResponseData;
}
