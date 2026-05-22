import type { ApiErrorStruct, DynamicAdImagesAddResponseData } from "../model/index";
export interface DynamicAdImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImagesAddResponseData;
}
