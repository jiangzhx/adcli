import type { SetObjectCommentFlagOpType } from "../model/index";
export interface ObjectCommentFlagUpdateRequest {
    account_id?: number | string;
    adcreative_id?: number | string;
    op_type?: SetObjectCommentFlagOpType;
    comment_id?: string;
    comment_level?: number;
}
