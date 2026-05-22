import type { ComponentWechatChannelSpec, CreativeComponentAuditStatus, CreativeComponentType, LiveRoomComponentSpecStruct, SysStatus } from "../models";
export interface LiveRoomComponentStruct {
    account_id?: number | string;
    component_name?: string;
    component_id?: number | string;
    component_type?: CreativeComponentType;
    finder_username?: string;
    finder_nickname?: string;
    status?: SysStatus;
    audit_status?: CreativeComponentAuditStatus;
    audit_msg?: string;
    component_spec?: LiveRoomComponentSpecStruct;
    component_wechat_channel_spec?: ComponentWechatChannelSpec;
    created_time?: number;
    last_modified_time?: number;
    is_publish_enabled?: boolean;
    wechat_channels_account_id?: string;
}
