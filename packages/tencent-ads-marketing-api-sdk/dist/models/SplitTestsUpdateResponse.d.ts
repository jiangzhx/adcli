import type { ApiErrorStruct, SplitTestsUpdateResponseData } from "../models";
export interface SplitTestsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SplitTestsUpdateResponseData;
}
