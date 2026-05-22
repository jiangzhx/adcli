import type { ApiErrorStruct, AssetPermissionsScenesUpdateResponseData } from "../models";
export interface AssetPermissionsScenesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPermissionsScenesUpdateResponseData;
}
