import type { ApiErrorStruct, LocalStorePackagesUpdateResponseData } from "../models";
export interface LocalStorePackagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesUpdateResponseData;
}
