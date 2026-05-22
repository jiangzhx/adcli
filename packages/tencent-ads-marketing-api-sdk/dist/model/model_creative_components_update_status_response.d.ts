import type { ApiErrorStruct, CreativeComponentsUpdateStatusResponseData } from "../model/index";
export interface CreativeComponentsUpdateStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsUpdateStatusResponseData;
}
