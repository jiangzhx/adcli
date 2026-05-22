import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../v3/index";
export interface CompAreaStruct {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    convert_unknown?: ConvertInfoConfigUnknown;
    convert_download?: ConvertInfoConfigDownload;
    convert_link?: ConvertInfoConfigLink;
    convert_weapp?: ConvertInfoConfigMiniProgram;
    convert_gh?: ConvertInfoConfigOfficialAccount;
    convert_followVideo?: ConvertInfoConfigFollowVideo;
}
