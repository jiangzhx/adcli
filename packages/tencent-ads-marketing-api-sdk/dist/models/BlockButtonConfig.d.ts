import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../models";
export interface BlockButtonConfig {
    color?: string;
    background_color?: string;
    content?: string;
    has_icon?: boolean;
    button_size?: string;
    margin_top?: number;
    margin_bottom?: number;
    convert_unknown?: ConvertInfoConfigUnknown;
    convert_download?: ConvertInfoConfigDownload;
    convert_link?: ConvertInfoConfigLink;
    convert_weapp?: ConvertInfoConfigMiniProgram;
    convert_gh?: ConvertInfoConfigOfficialAccount;
    convert_followVideo?: ConvertInfoConfigFollowVideo;
}
