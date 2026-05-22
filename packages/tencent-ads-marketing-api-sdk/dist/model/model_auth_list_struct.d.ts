import type { PromotedObjectType, WechatAuthScope, WechatAuthType } from "../model/index";
export interface AuthListStruct {
    promoted_object_name?: string;
    promoted_object_id?: string;
    promoted_object_type?: PromotedObjectType;
    auth_token?: string;
    auth_begin_date?: number;
    auth_ttl?: number;
    status?: number;
    audit_msg?: string;
    auth_type?: WechatAuthType;
    auth_scope?: WechatAuthScope;
    is_ad_acct?: boolean;
}
