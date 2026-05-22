import type { ApiErrorStruct, DynamicAdImagesGetResponseData } from "../models";
export interface DynamicAdImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImagesGetResponseData;
}
