import type { ApiErrorStruct, LocalStorePackagesDeleteResponseData } from "../models";
export interface LocalStorePackagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesDeleteResponseData;
}
