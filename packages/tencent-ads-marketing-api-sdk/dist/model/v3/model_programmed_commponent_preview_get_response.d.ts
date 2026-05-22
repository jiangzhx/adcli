import type { ApiErrorStruct, ProgrammedCommponentPreviewGetResponseData } from "../v3/index";
export interface ProgrammedCommponentPreviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProgrammedCommponentPreviewGetResponseData;
}
