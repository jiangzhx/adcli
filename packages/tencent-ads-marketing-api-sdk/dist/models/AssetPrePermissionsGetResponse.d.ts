import type { ApiErrorStruct, AssetPrePermissionsGetResponseData } from "../models";
export interface AssetPrePermissionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPrePermissionsGetResponseData;
}
