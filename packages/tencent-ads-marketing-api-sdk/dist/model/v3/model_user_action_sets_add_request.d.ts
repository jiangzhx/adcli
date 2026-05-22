import type { AmUserActionSetType } from "../v3/index";
export interface UserActionSetsAddRequest {
    account_id?: number | string;
    type?: AmUserActionSetType;
    mobile_app_id?: number | string;
    wechat_app_id?: string;
    app_id_str?: string;
    name?: string;
    description?: string;
    usages?: string[];
    enable_conversion_claim?: boolean;
}
