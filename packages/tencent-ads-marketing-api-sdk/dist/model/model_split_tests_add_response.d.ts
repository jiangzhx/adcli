import type { ApiErrorStruct, SplitTestsAddResponseData } from "../model/index";
export interface SplitTestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsAddResponseData;
}
