import type { ApiErrorStruct, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../v3/index";
export interface ProgrammedCommponentPreviewTemplateUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewTemplateUpdateResponseData;
}
