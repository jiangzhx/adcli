import type { ChannelPackageSpecStruct } from "../model/index";
export interface AppAndroidUnionSpec {
    packname?: string;
    version?: string;
    icon?: string;
    package_size?: string;
    package_md5?: string;
    package_download_url?: string;
    channel_package_spec?: ChannelPackageSpecStruct[];
}
