import type { AdUnionReportsGetResponseData, ApiErrorStruct } from "../models";
export interface AdUnionReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdUnionReportsGetResponseData;
}
