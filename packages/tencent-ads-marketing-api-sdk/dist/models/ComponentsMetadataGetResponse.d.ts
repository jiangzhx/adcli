import type { ApiErrorStruct, ComponentsMetadataGetResponseData } from "../models";
export interface ComponentsMetadataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsMetadataGetResponseData;
}
