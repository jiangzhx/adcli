import type { ApiErrorStruct, TargetingTagsGetResponseData } from "../v3/index";
export interface TargetingTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TargetingTagsGetResponseData;
}
