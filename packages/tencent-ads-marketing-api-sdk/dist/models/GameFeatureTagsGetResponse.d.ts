import type { ApiErrorStruct, GameFeatureTagsGetResponseData } from "../models";
export interface GameFeatureTagsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureTagsGetResponseData;
}
