import type { ApiErrorStruct, AssetPermissionsAddResponseData } from "../model/index";
export interface AssetPermissionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPermissionsAddResponseData;
}
