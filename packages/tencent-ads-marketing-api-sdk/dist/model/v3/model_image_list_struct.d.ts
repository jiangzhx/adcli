import type { DisplayMode, ImageListItem, JumpinfoStruct } from "../v3/index";
export interface ImageListStruct {
    jump_info?: JumpinfoStruct;
    list?: ImageListItem[];
    display_mode?: DisplayMode;
}
