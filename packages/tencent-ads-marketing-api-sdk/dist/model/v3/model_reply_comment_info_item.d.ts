import type { FinderCommentContentType, FinderCommentFlag, ImageCommentInfo } from "../v3/index";
export interface ReplyCommentInfoItem {
    comment_id?: string;
    content?: string;
    created_time?: number;
    comment_flag?: FinderCommentFlag;
    comment_level?: number;
    content_type?: FinderCommentContentType;
    image_comment_info?: ImageCommentInfo;
}
