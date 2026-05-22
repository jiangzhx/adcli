import type { ChannelPackageSpecStruct } from "../models";
export interface AppAndroidMyappSpec {
    packname?: string;
    version?: string;
    icon?: string;
    package_size?: string;
    channel_package_spec?: ChannelPackageSpecStruct[];
}
