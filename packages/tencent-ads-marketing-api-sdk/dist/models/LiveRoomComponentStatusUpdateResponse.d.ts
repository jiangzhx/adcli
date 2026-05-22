import type { ApiErrorStruct, LiveRoomComponentStatusUpdateResponseData } from "../models";
export interface LiveRoomComponentStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentStatusUpdateResponseData;
}
