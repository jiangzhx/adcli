import type { ApiErrorStruct, TargetingTagsUvGetResponseData } from "../model/index";
export interface TargetingTagsUvGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagsUvGetResponseData;
}
