import type { ChannelPackageSpecStruct } from "../model/index";
export interface AppAndroidMyappSpec {
    packname?: string;
    version?: string;
    icon?: string;
    package_size?: string;
    channel_package_spec?: ChannelPackageSpecStruct[];
}
