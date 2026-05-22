import type { ApiErrorStruct, LocalStorePackagesAddResponseData } from "../models";
export interface LocalStorePackagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesAddResponseData;
}
