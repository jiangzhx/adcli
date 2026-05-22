import type { ApiErrorStruct, SplitTestsGetResponseData } from "../model/index";
export interface SplitTestsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsGetResponseData;
}
