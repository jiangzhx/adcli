import type { CreativeComponentType, LiveRoomComponentSpecStruct } from "../v3/index";
export interface LiveRoomComponentsAddRequest {
    account_id?: number | string;
    component_name?: string;
    component_type?: CreativeComponentType;
    finder_username?: string;
    component_spec?: LiveRoomComponentSpecStruct;
    wechat_channels_account_id?: string;
}
