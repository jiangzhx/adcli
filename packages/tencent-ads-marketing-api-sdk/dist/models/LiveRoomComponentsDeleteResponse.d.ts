import type { ApiErrorStruct, LiveRoomComponentsDeleteResponseData } from "../models";
export interface LiveRoomComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsDeleteResponseData;
}
