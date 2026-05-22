import type { ConversionDataType, ConversionTargetType, LinkUrlLinkNameType, RewardquestWechatChannelsSpecImageInfo } from "../model/index";
export interface RewardquestWechatChannelsSpecFreeTradeAdInfo {
    thumb?: RewardquestWechatChannelsSpecImageInfo;
    image_list?: RewardquestWechatChannelsSpecImageInfo[];
    title?: string;
    desc?: string;
    back_color_rgb?: string;
    dynamic_show_type?: ConversionDataType;
    dynamic_show_text?: ConversionTargetType;
    btn_text?: LinkUrlLinkNameType;
}
