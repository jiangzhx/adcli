import type { WriteTargetingSetting } from "../model/index";
export interface TargetingsUpdateRequest {
    targeting_id?: number | string;
    targeting_name?: string;
    description?: string;
    account_id?: number | string;
    targeting?: WriteTargetingSetting;
}
