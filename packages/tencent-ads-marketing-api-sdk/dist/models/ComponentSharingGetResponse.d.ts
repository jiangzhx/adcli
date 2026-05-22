import type { ApiErrorStruct, ComponentSharingGetResponseData } from "../models";
export interface ComponentSharingGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentSharingGetResponseData;
}
