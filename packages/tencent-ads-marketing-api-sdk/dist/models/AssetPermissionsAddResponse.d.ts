import type { ApiErrorStruct, AssetPermissionsAddResponseData } from "../models";
export interface AssetPermissionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPermissionsAddResponseData;
}
