import type { AgencyGetResponseData, ApiErrorStruct } from "../model/index";
export interface AgencyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyGetResponseData;
}
