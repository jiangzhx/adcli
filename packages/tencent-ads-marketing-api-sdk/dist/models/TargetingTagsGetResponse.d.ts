import type { ApiErrorStruct, TargetingTagsGetResponseData } from "../models";
export interface TargetingTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagsGetResponseData;
}
