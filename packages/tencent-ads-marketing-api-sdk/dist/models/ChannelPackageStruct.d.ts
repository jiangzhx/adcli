import type { UnionPackageSysStatus } from "../models";
export interface ChannelPackageStruct {
    channel_id?: string;
    channel_name?: string;
    system_status?: UnionPackageSysStatus;
    created_time?: number;
    last_modified_time?: number;
}
