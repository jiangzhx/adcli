import type { ApiErrorStruct, SearchDynamicCreativesUpdateResponseData } from "../models";
export interface SearchDynamicCreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchDynamicCreativesUpdateResponseData;
}
