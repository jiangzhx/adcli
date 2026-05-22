import type { UnionChannelTaskStatus } from "../model/index";
export interface UnionChannelPackageInfo {
    android_union_app_id?: number | string;
    package_name?: string;
    status?: UnionChannelTaskStatus;
    created_time?: number;
    last_modified_time?: number;
}
