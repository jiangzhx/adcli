import type { ApiErrorStruct, AssetPermissionsScenesUpdateResponseData } from "../model/index";
export interface AssetPermissionsScenesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetPermissionsScenesUpdateResponseData;
}
