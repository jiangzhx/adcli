import type { ApiErrorStruct, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../models";
export interface ProgrammedCommponentPreviewTemplateUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewTemplateUpdateResponseData;
}
