import type { ApiErrorStruct, LocalStorePackagesDeleteResponseData } from "../v3/index";
export interface LocalStorePackagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesDeleteResponseData;
}
