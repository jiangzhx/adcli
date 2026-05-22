import type { AdqReportsUpgradeStatusGetResponseData, ApiErrorStruct } from "../models";
export interface AdqReportsUpgradeStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdqReportsUpgradeStatusGetResponseData;
}
