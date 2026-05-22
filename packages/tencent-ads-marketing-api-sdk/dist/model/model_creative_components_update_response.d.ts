import type { ApiErrorStruct, CreativeComponentsUpdateResponseData } from "../model/index";
export interface CreativeComponentsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsUpdateResponseData;
}
