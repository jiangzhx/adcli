import type { TargetingShareType } from "../model/index";
export interface TargetingsShareAddRequest {
    targeting_id?: number | string;
    share_to_account_id?: number | string;
    share_type?: TargetingShareType;
    account_id?: number | string;
}
