import type { AgencyGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyGetResponseData;
}
