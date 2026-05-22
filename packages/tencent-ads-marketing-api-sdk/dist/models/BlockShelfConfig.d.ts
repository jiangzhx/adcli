import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../models";
export interface BlockShelfConfig {
    card_type?: string;
    style_type?: string;
    title?: string;
    title_color?: string;
    desc?: string;
    desc_color?: string;
    button_content?: string;
    button_font_color?: string;
    button_background_color?: string;
    card_background_color?: string;
    card_border_color?: string;
    icon_material_id?: string;
    margin_top?: number;
    margin_bottom?: number;
    convert_unknown?: ConvertInfoConfigUnknown;
    convert_download?: ConvertInfoConfigDownload;
    convert_link?: ConvertInfoConfigLink;
    convert_weapp?: ConvertInfoConfigMiniProgram;
    convert_gh?: ConvertInfoConfigOfficialAccount;
    convert_followVideo?: ConvertInfoConfigFollowVideo;
}
