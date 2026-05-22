import type { ApiErrorStruct } from "../v3/index";
export interface ChannelsCommentAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
