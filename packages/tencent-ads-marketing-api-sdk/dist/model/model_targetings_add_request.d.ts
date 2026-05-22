import type { WriteTargetingSetting } from "../model/index";
export interface TargetingsAddRequest {
    targeting_name?: string;
    description?: string;
    account_id?: number | string;
    targeting?: WriteTargetingSetting;
}
