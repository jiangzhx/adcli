import type { ApiErrorStruct, DynamicAdImagesAddResponseData } from "../v3/index";
export interface DynamicAdImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImagesAddResponseData;
}
