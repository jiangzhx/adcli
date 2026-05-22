export interface WechatShopAuthorizationAddResponseData {
    authorization_id?: number | string;
    authorization_qrcode_url?: string;
    authorization_qrcode_expired_time?: number;
    authorization_description?: string;
    authorization_agreement?: string;
    wechat_channels_shop_name?: string;
}
