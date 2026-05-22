import type { ApiErrorStruct, SplitTestsDeleteResponseData } from "../model/index";
export interface SplitTestsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsDeleteResponseData;
}
