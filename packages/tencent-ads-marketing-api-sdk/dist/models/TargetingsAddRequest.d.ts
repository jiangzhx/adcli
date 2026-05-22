import type { WriteTargetingSetting } from "../models";
export interface TargetingsAddRequest {
    targeting_name?: string;
    description?: string;
    account_id?: number | string;
    targeting?: WriteTargetingSetting;
}
