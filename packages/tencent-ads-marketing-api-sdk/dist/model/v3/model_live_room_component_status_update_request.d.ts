import type { CreativeComponentType, SysStatus } from "../v3/index";
export interface LiveRoomComponentStatusUpdateRequest {
    account_id?: number | string;
    component_id?: number | string;
    component_type?: CreativeComponentType;
    status?: SysStatus;
    live_begin_time?: number;
}
