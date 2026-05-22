import type { ApiErrorStruct, ComponentSharingUpdateResponseData } from "../models";
export interface ComponentSharingUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentSharingUpdateResponseData;
}
