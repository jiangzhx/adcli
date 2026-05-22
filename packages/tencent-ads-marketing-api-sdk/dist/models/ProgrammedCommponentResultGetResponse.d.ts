import type { ApiErrorStruct, ProgrammedCommponentResultGetResponseData } from "../models";
export interface ProgrammedCommponentResultGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentResultGetResponseData;
}
