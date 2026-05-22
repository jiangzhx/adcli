import type { ApiErrorStruct, CapabilitiesGetResponseData } from "../models";
export interface CapabilitiesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CapabilitiesGetResponseData;
}
