import type { FinderCommentContentType, FinderCommentFlag, ImageCommentInfo, ReplyCommentInfoItem } from "../v3/index";
export interface CommentListGetListStruct {
    comment_id?: string;
    content?: string;
    created_time?: number;
    comment_flag?: FinderCommentFlag;
    finder_ad_object_id?: number | string;
    author_replys?: ReplyCommentInfoItem[];
    comment_level?: number;
    content_type?: FinderCommentContentType;
    image_comment_info?: ImageCommentInfo;
}
