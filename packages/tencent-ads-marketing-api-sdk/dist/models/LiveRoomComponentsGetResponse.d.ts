import type { ApiErrorStruct, LiveRoomComponentsGetResponseData } from "../models";
export interface LiveRoomComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsGetResponseData;
}
