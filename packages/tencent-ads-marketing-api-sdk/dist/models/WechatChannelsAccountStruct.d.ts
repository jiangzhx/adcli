import type { WechatChannelsAuthScope, WechatChannelsAuthStatus, WechatChannelsAuthType } from "../models";
export interface WechatChannelsAccountStruct {
    wechat_channels_account_id?: string;
    wechat_channels_account_name?: string;
    created_time?: number;
    last_modified_time?: number;
    wechat_channels_spam_block?: boolean;
    wechat_channels_spam_slient?: boolean;
    wechat_channels_account_icon?: string;
    authorization_type?: WechatChannelsAuthType;
    authorization_scope?: WechatChannelsAuthScope;
    is_blocked?: boolean;
    is_private?: boolean;
    is_ad_acct?: boolean;
    authorization_begin_time?: number;
    authorization_ttl?: number;
    is_disable?: boolean;
    disable_message?: string;
    authorization_status?: WechatChannelsAuthStatus;
}
