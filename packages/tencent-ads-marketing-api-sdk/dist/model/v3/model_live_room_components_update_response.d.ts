import type { ApiErrorStruct, LiveRoomComponentsUpdateResponseData } from "../v3/index";
export interface LiveRoomComponentsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsUpdateResponseData;
}
