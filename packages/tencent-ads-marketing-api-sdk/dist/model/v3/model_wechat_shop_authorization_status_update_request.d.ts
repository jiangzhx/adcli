import type { WechatChannelsAuthStatus } from "../v3/index";
export interface WechatShopAuthorizationStatusUpdateRequest {
    account_id?: number | string;
    authorization_id?: number | string;
    authorization_status?: WechatChannelsAuthStatus;
}
