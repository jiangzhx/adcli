import type { ApiErrorStruct, BusinessPointGetResponseData } from "../models";
export interface BusinessPointGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessPointGetResponseData;
}
