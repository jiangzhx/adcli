import type { LiveCheerIconStruct } from "../models";
export interface LiveImageComponentSpecStruct {
    bg_img_url?: string;
    bg_img_id?: string;
    cheer_icon?: LiveCheerIconStruct[];
    is_use_cheer_icon?: number;
    is_use_bg_img?: number;
    live_begin_time?: number;
}
