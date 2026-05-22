import type { ApiErrorStruct, ExtendPackageAddResponseData } from "../models";
export interface ExtendPackageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageAddResponseData;
}
