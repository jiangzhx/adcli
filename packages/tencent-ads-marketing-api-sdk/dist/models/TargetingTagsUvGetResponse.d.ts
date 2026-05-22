import type { ApiErrorStruct, TargetingTagsUvGetResponseData } from "../models";
export interface TargetingTagsUvGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagsUvGetResponseData;
}
