import type { ApiErrorStruct } from "../models";
export interface AssetPrePermissionsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
