import type { ApiErrorStruct, LiveRoomComponentsDeleteResponseData } from "../v3/index";
export interface LiveRoomComponentsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsDeleteResponseData;
}
