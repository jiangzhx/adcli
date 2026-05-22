import type { ApiErrorStruct, ProgrammedCommponentPreviewDeleteResponseData } from "../v3/index";
export interface ProgrammedCommponentPreviewDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewDeleteResponseData;
}
