import type { CommentListGetListStruct } from "../v3/index";
export interface CommentListGetResponseData {
    list?: CommentListGetListStruct[];
    last_buffer?: string;
    continue_flag?: number;
}
