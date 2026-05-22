import type { DisplayMode, ImageListItem, JumpinfoStruct } from "../models";
export interface ImageListStruct {
    jump_info?: JumpinfoStruct;
    list?: ImageListItem[];
    display_mode?: DisplayMode;
}
