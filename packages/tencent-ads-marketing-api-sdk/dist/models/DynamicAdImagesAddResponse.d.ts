import type { ApiErrorStruct, DynamicAdImagesAddResponseData } from "../models";
export interface DynamicAdImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImagesAddResponseData;
}
