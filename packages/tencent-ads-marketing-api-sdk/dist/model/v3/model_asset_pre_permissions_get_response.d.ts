import type { ApiErrorStruct, AssetPrePermissionsGetResponseData } from "../v3/index";
export interface AssetPrePermissionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPrePermissionsGetResponseData;
}
