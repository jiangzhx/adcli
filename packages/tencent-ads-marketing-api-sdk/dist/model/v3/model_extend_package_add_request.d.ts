import type { CreateSplitChannelStruct } from "../v3/index";
export interface ExtendPackageAddRequest {
    account_id?: number | string;
    package_id?: number | string;
    channel_list?: CreateSplitChannelStruct[];
}
