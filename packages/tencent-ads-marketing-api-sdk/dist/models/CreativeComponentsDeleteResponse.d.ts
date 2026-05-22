import type { ApiErrorStruct, CreativeComponentsDeleteResponseData } from "../models";
export interface CreativeComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsDeleteResponseData;
}
