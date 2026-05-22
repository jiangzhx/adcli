import type { ApiErrorStruct } from "../models";
export interface ChannelsCommentAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
