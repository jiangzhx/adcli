import type { ApiErrorStruct, GameFeatureTagsGetResponseData } from "../v3/index";
export interface GameFeatureTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureTagsGetResponseData;
}
