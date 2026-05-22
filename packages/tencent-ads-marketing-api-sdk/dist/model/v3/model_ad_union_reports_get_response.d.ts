import type { AdUnionReportsGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdUnionReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdUnionReportsGetResponseData;
}
