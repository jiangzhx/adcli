import type { SetObjectCommentFlagOpType } from "../model/index";
export interface UpdateFinderObjectCommentFlagItem {
    adcreative_id?: number | string;
    op_type?: SetObjectCommentFlagOpType;
    account_id?: number | string;
    comment_id?: string;
    comment_level?: number;
}
