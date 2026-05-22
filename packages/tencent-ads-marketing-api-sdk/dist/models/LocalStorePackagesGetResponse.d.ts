import type { ApiErrorStruct, LocalStorePackagesGetResponseData } from "../models";
export interface LocalStorePackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesGetResponseData;
}
