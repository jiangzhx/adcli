import type { ApiErrorStruct, SceneSpecTagsGetResponseData } from "../v3/index";
export interface SceneSpecTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SceneSpecTagsGetResponseData;
}
