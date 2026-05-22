import type { ApiErrorStruct, ProgrammedTemplateGetResponseData } from "../models";
export interface ProgrammedTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedTemplateGetResponseData;
}
