import type { ApiErrorStruct, CommentListGetResponseData } from "../v3/index";
export interface CommentListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CommentListGetResponseData;
}
