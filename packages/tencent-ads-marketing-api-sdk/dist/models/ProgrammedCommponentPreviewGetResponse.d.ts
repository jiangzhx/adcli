import type { ApiErrorStruct, ProgrammedCommponentPreviewGetResponseData } from "../models";
export interface ProgrammedCommponentPreviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewGetResponseData;
}
