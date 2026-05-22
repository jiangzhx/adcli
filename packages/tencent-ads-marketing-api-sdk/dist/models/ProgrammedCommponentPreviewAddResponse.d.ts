import type { ApiErrorStruct, ProgrammedCommponentPreviewAddResponseData } from "../models";
export interface ProgrammedCommponentPreviewAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewAddResponseData;
}
