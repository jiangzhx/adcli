import type { BrandDetail, ImageListItem, JumpInfoComponentDetail, VideoComponentDetailStruct } from "../models";
export interface ComponentDetail {
    jump_info?: JumpInfoComponentDetail;
    image_list?: ImageListItem[];
    video_list?: VideoComponentDetailStruct[];
    brand?: BrandDetail;
}
