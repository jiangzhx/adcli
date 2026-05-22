import type { FinderCommentFlag } from "../v3/index";
export interface ReplyCommentInfoItem {
    comment_id?: string;
    content?: string;
    created_time?: number;
    comment_flag?: FinderCommentFlag;
    comment_level?: number;
}
