import type { ApiErrorStruct, ProgrammedCommponentPreviewAddResponseData } from "../v3/index";
export interface ProgrammedCommponentPreviewAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewAddResponseData;
}
