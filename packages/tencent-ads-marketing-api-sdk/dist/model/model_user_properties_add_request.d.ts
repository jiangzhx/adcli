import type { UserPropertiesAddProperty } from "../model/index";
export interface UserPropertiesAddRequest {
    account_id?: number | string;
    user_property_set_id?: number | string;
    wechat_app_id?: string;
    property?: UserPropertiesAddProperty[];
}
