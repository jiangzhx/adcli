import type { ApiErrorStruct, LiveRoomComponentsGetResponseData } from "../v3/index";
export interface LiveRoomComponentsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LiveRoomComponentsGetResponseData;
}
