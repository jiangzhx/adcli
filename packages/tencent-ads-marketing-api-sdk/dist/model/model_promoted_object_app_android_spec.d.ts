import type { ChannelPackageSpecStruct } from "../model/index";
export interface PromotedObjectAppAndroidSpec {
    packname?: string;
    version?: string;
    icon?: string;
    average_rating?: string;
    package_size?: string;
    genres?: string[];
    package_download_url?: string;
    channel_package_spec?: ChannelPackageSpecStruct[];
}
