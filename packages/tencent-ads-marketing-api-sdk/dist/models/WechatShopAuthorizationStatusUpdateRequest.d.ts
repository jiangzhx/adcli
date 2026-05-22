import type { WechatChannelsAuthStatus } from "../models";
export interface WechatShopAuthorizationStatusUpdateRequest {
    account_id?: number | string;
    authorization_id?: number | string;
    authorization_status?: WechatChannelsAuthStatus;
}
