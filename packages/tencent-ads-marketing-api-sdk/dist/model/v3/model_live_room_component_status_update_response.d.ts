import type { ApiErrorStruct, LiveRoomComponentStatusUpdateResponseData } from "../v3/index";
export interface LiveRoomComponentStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentStatusUpdateResponseData;
}
