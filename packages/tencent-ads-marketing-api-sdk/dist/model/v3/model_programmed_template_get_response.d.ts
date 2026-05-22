import type { ApiErrorStruct, ProgrammedTemplateGetResponseData } from "../v3/index";
export interface ProgrammedTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedTemplateGetResponseData;
}
