import type { ApiErrorStruct, DynamicAdImagesGetResponseData } from "../v3/index";
export interface DynamicAdImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImagesGetResponseData;
}
