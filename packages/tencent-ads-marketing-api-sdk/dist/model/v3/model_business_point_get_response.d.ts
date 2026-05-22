import type { ApiErrorStruct, BusinessPointGetResponseData } from "../v3/index";
export interface BusinessPointGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessPointGetResponseData;
}
