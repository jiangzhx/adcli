import type { ApiErrorStruct, ExtendPackageAddResponseData } from "../model/index";
export interface ExtendPackageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageAddResponseData;
}
