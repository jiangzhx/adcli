import type { ApiErrorStruct } from "../models";
export interface AssetPermissionsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
