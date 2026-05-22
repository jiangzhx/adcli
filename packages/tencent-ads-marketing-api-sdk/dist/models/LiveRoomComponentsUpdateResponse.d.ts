import type { ApiErrorStruct, LiveRoomComponentsUpdateResponseData } from "../models";
export interface LiveRoomComponentsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsUpdateResponseData;
}
