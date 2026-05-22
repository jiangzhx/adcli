import type { CreateSplitChannelStruct } from "../model/index";
export interface ExtendPackageAddRequest {
    account_id?: number | string;
    package_id?: number | string;
    channel_list?: CreateSplitChannelStruct[];
}
