import type { ApiErrorStruct, AssetPermissionsAddResponseData } from "../v3/index";
export interface AssetPermissionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPermissionsAddResponseData;
}
