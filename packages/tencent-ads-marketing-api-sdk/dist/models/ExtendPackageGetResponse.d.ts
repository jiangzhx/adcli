import type { ApiErrorStruct, ExtendPackageGetResponseData } from "../models";
export interface ExtendPackageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageGetResponseData;
}
