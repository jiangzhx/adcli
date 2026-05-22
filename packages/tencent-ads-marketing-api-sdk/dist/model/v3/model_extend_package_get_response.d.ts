import type { ApiErrorStruct, ExtendPackageGetResponseData } from "../v3/index";
export interface ExtendPackageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageGetResponseData;
}
