import type { ApiErrorStruct } from "../models";
export interface ChannelsCommentDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
