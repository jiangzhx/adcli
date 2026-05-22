import type { ApiErrorStruct, ProgrammedCommponentResultGetResponseData } from "../v3/index";
export interface ProgrammedCommponentResultGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentResultGetResponseData;
}
