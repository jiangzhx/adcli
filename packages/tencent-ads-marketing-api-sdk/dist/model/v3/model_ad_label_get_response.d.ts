import type { AdLabelGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdLabelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdLabelGetResponseData;
}
