import type { ApiErrorStruct, LocalStorePackagesAddResponseData } from "../v3/index";
export interface LocalStorePackagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LocalStorePackagesAddResponseData;
}
