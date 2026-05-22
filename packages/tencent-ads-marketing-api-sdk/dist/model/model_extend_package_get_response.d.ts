import type { ApiErrorStruct, ExtendPackageGetResponseData } from "../model/index";
export interface ExtendPackageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageGetResponseData;
}
