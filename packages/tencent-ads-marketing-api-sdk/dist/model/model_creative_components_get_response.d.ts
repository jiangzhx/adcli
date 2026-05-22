import type { ApiErrorStruct, CreativeComponentsGetResponseData } from "../model/index";
export interface CreativeComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsGetResponseData;
}
