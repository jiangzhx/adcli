import type { ApiErrorStruct, LeadsCallVirtualNumberGetResponseData } from "../models";
export interface LeadsCallVirtualNumberGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallVirtualNumberGetResponseData;
}
