import type { ApiErrorStruct } from "../model/index";
export interface AssetPrePermissionsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
