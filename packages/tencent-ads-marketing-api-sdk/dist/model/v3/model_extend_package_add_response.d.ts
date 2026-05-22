import type { ApiErrorStruct, ExtendPackageAddResponseData } from "../v3/index";
export interface ExtendPackageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ExtendPackageAddResponseData;
}
