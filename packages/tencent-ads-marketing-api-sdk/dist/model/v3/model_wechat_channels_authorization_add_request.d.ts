import type { Certification, WechatChannelsAuthScope, WechatChannelsCertificationRelationship } from "../v3/index";
export interface WechatChannelsAuthorizationAddRequest {
    account_id?: number | string;
    wechat_channels_account_name?: string;
    authorization_certification_list?: Certification[];
    authorization_relationship?: WechatChannelsCertificationRelationship;
    authorization_scope?: WechatChannelsAuthScope;
    authorization_begin_time?: number;
    authorization_ttl?: number;
}
