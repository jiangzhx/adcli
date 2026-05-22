import type { ApiErrorStruct, GameFeatureTagsGetResponseData } from "../model/index";
export interface GameFeatureTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureTagsGetResponseData;
}
