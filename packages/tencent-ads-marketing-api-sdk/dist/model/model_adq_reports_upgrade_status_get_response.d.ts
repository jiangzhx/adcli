import type { AdqReportsUpgradeStatusGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdqReportsUpgradeStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdqReportsUpgradeStatusGetResponseData;
}
