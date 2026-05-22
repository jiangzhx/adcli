import type { ApiErrorStruct, ProgrammedCommponentPreviewUpdateResponseData } from "../v3/index";
export interface ProgrammedCommponentPreviewUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewUpdateResponseData;
}
