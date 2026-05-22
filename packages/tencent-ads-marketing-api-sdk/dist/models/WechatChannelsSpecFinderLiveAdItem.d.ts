import type { WechatChannelsSpecCheerIconInfo, WechatChannelsSpecConvComponent } from "../models";
export interface WechatChannelsSpecFinderLiveAdItem {
    is_use_component?: number;
    is_use_cheer_icon?: number;
    is_use_bg_img?: number;
    conv_component?: WechatChannelsSpecConvComponent;
    cheer_icon_info?: WechatChannelsSpecCheerIconInfo[];
    bg_img_url?: string;
    begin_time?: number;
}
