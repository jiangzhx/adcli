import type { ApiErrorStruct, ProgrammedCommponentPreviewUpdateResponseData } from "../models";
export interface ProgrammedCommponentPreviewUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewUpdateResponseData;
}
