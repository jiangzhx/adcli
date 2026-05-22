import type { CommentListGetListStruct } from "../models";
export interface CommentListGetResponseData {
    list?: CommentListGetListStruct[];
    last_buffer?: string;
    continue_flag?: number;
}
