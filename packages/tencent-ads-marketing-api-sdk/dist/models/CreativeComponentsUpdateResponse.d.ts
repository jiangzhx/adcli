import type { ApiErrorStruct, CreativeComponentsUpdateResponseData } from "../models";
export interface CreativeComponentsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeComponentsUpdateResponseData;
}
