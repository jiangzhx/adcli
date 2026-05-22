import type { ApiErrorStruct, AssetPrePermissionsGetResponseData } from "../model/index";
export interface AssetPrePermissionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPrePermissionsGetResponseData;
}
