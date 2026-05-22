import type { ApiErrorStruct, LiveRoomComponentsAddResponseData } from "../v3/index";
export interface LiveRoomComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsAddResponseData;
}
