import type { WechatChannelsAuthStatus } from "../v3/index";
export interface ShopAuthListStruct {
    authorization_id?: number | string;
    wechat_channels_shop_name?: string;
    wechat_channels_shop_id?: string;
    wechat_channels_shop_icon?: string;
    authorization_begin_time?: number;
    authorization_ttl?: number;
    authorization_status?: WechatChannelsAuthStatus;
    authorization_qrcode_url?: string;
    authorization_qrcode_expired_time?: number;
}
