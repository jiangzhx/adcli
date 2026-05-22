import type { ApiErrorStruct, LeadsCallVirtualNumberGetResponseData } from "../v3/index";
export interface LeadsCallVirtualNumberGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallVirtualNumberGetResponseData;
}
