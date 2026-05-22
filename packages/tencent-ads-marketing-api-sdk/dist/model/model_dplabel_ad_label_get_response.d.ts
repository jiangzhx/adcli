import type { ApiErrorStruct, DplabelAdLabelGetResponseData } from "../model/index";
export interface DplabelAdLabelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DplabelAdLabelGetResponseData;
}
