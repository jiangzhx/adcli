import type { ApiErrorStruct, LeadsCallVirtualNumberGetResponseData } from "../model/index";
export interface LeadsCallVirtualNumberGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallVirtualNumberGetResponseData;
}
