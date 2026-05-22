import type { UnionPackageSysStatus } from "../model/index";
export interface ChannelPackageStruct {
    app_android_channel_package_id?: string;
    package_name?: string;
    system_status?: UnionPackageSysStatus;
    package_origin_url?: string;
    created_time?: number;
    last_modified_time?: number;
}
