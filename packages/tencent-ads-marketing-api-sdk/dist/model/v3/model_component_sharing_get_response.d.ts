import type { ApiErrorStruct, ComponentSharingGetResponseData } from "../v3/index";
export interface ComponentSharingGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentSharingGetResponseData;
}
