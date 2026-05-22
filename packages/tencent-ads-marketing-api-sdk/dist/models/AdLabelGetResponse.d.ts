import type { AdLabelGetResponseData, ApiErrorStruct } from "../models";
export interface AdLabelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdLabelGetResponseData;
}
