import type { ApiErrorStruct, ComponentsMetadataGetResponseData } from "../v3/index";
export interface ComponentsMetadataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentsMetadataGetResponseData;
}
