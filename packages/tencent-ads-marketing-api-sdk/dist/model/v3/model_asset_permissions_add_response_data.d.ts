import type { FailReasonStruct } from "../v3/index";
export interface AssetPermissionsAddResponseData {
    fail_num?: number;
    success_num?: number;
    fail_reason?: FailReasonStruct[];
}
