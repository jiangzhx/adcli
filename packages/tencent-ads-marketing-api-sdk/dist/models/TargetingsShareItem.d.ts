import type { TargetingShareType } from "../models";
export interface TargetingsShareItem {
    targeting_id?: number | string;
    share_to_account_id?: number | string;
    share_type?: TargetingShareType;
}
