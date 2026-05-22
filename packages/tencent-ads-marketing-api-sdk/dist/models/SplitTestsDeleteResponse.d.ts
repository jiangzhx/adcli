import type { ApiErrorStruct, SplitTestsDeleteResponseData } from "../models";
export interface SplitTestsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsDeleteResponseData;
}
