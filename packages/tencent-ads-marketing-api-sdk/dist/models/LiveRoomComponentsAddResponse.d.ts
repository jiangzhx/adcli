import type { ApiErrorStruct, LiveRoomComponentsAddResponseData } from "../models";
export interface LiveRoomComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsAddResponseData;
}
