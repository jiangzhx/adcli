import type { ApiErrorStruct, TargetingTagsUvGetResponseData } from "../v3/index";
export interface TargetingTagsUvGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagsUvGetResponseData;
}
