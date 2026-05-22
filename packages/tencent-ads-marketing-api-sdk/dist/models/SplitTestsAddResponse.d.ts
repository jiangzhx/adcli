import type { ApiErrorStruct, SplitTestsAddResponseData } from "../models";
export interface SplitTestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsAddResponseData;
}
