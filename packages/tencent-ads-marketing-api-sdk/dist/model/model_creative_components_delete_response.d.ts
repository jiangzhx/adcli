import type { ApiErrorStruct, CreativeComponentsDeleteResponseData } from "../model/index";
export interface CreativeComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsDeleteResponseData;
}
