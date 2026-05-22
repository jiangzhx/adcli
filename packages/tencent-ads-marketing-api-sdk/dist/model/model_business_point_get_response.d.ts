import type { ApiErrorStruct, BusinessPointGetResponseData } from "../model/index";
export interface BusinessPointGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessPointGetResponseData;
}
