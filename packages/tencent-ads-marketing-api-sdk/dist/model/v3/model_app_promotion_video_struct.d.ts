import type { AppPromotionVideoStructQrcodePosition } from "../v3/index";
export interface AppPromotionVideoStruct {
    video?: string;
    video2?: string;
    video3?: string;
    allow_tv_qrcode?: boolean;
    qrcode_position?: AppPromotionVideoStructQrcodePosition;
    qrcode_width?: number;
}
