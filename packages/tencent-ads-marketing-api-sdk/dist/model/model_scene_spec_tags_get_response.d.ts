import type { ApiErrorStruct, SceneSpecTagsGetResponseData } from "../model/index";
export interface SceneSpecTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SceneSpecTagsGetResponseData;
}
