import type { CreativeComponentType, LiveRoomComponentSpecStruct } from "../models";
export interface LiveRoomComponentsUpdateRequest {
    account_id?: number | string;
    component_id?: number | string;
    component_type?: CreativeComponentType;
    component_spec?: LiveRoomComponentSpecStruct;
}
