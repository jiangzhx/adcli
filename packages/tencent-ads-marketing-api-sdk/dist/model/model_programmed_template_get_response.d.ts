import type { ApiErrorStruct, ProgrammedTemplateGetResponseData } from "../model/index";
export interface ProgrammedTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedTemplateGetResponseData;
}
