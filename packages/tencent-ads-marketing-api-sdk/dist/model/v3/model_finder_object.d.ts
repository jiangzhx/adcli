import type { AdStatus, CreatedSourceType, FeedsSourceType, WechatChannelsMedia, WxgWechatChannelsComponent } from "../v3/index";
export interface FinderObject {
    export_id?: string;
    create_time?: number;
    delete_flag?: number;
    description?: string;
    medias?: WechatChannelsMedia[];
    finder_username?: string;
    wechat_channels_account_id?: string;
    created_source?: CreatedSourceType;
    wechat_channels_components?: WxgWechatChannelsComponent[];
    feeds_source_type?: FeedsSourceType;
    is_disable?: boolean;
    disable_message?: string;
    audit_status?: AdStatus;
}
