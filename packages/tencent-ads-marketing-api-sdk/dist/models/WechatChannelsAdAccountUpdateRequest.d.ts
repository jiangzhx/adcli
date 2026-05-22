import type { AdAccountCertification } from "../models";
export interface WechatChannelsAdAccountUpdateRequest {
    account_id?: number | string;
    wechat_channels_ad_account_id?: number | string;
    wechat_bind_auth_token?: string;
    nickname?: string;
    head_image_id?: string;
    certification_list?: AdAccountCertification[];
    export_username?: string;
    wechat_channels_account_id?: string;
}
