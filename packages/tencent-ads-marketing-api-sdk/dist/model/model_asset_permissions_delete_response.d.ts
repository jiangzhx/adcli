import type { ApiErrorStruct } from "../model/index";
export interface AssetPermissionsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
