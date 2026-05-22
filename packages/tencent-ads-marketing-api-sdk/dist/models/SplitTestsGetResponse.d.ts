import type { ApiErrorStruct, SplitTestsGetResponseData } from "../models";
export interface SplitTestsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsGetResponseData;
}
