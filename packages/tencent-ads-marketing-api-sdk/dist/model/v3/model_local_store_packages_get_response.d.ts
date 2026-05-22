import type { ApiErrorStruct, LocalStorePackagesGetResponseData } from "../v3/index";
export interface LocalStorePackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesGetResponseData;
}
