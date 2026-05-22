import type { ApiErrorStruct, LocalStorePackagesUpdateResponseData } from "../v3/index";
export interface LocalStorePackagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesUpdateResponseData;
}
