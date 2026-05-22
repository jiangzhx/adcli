import type { ApiErrorStruct, SceneSpecTagsGetResponseData } from "../models";
export interface SceneSpecTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SceneSpecTagsGetResponseData;
}
