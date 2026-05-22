import type { ApiErrorStruct, ExtendPackageUpdateResponseData } from "../model/index";
export interface ExtendPackageUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageUpdateResponseData;
}
