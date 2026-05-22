import type { ApiErrorStruct, CommentListGetResponseData } from "../models";
export interface CommentListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CommentListGetResponseData;
}
