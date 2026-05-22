import type { ApiErrorStruct, DplabelAdLabelGetResponseData } from "../models";
export interface DplabelAdLabelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DplabelAdLabelGetResponseData;
}
