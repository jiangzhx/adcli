import type { ApiErrorStruct, ProgrammedCommponentPreviewDeleteResponseData } from "../models";
export interface ProgrammedCommponentPreviewDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewDeleteResponseData;
}
