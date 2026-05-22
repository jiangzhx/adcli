import type { CreateSplitChannelStruct } from "../models";
export interface ExtendPackageAddRequest {
    account_id?: number | string;
    package_id?: number | string;
    channel_list?: CreateSplitChannelStruct[];
}
