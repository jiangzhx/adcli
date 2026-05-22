import type { UpdateAndroidChannelPackageSpec } from "../v3/index";
export interface TaskTypeUpdateAndroidChannelPackageSpec {
    myapp_auth_key?: string;
    android_app_id?: number | string;
    android_channel_package_spec?: UpdateAndroidChannelPackageSpec[];
}
