import type { ApiErrorStruct, CreativeComponentsGetResponseData } from "../models";
export interface CreativeComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsGetResponseData;
}
