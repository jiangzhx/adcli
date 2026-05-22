import type { ApiErrorStruct, ExtendPackageUpdateResponseData } from "../v3/index";
export interface ExtendPackageUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageUpdateResponseData;
}
