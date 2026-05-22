import type { ApiErrorStruct, ComponentSharingUpdateResponseData } from "../v3/index";
export interface ComponentSharingUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentSharingUpdateResponseData;
}
