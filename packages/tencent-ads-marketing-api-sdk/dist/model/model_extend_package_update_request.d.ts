import type { UpdateSplitChannelStruct } from "../model/index";
export interface ExtendPackageUpdateRequest {
    account_id?: number | string;
    package_id?: number | string;
    channel_list?: UpdateSplitChannelStruct[];
}
