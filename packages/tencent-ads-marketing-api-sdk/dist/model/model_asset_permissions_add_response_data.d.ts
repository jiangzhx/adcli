import type { FailReasonStruct } from "../model/index";
export interface AssetPermissionsAddResponseData {
    fail_num?: number;
    success_num?: number;
    fail_reason?: FailReasonStruct[];
}
