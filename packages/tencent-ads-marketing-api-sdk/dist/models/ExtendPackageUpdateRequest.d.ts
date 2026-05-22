import type { UpdateSplitChannelStruct } from "../models";
export interface ExtendPackageUpdateRequest {
    account_id?: number | string;
    package_id?: number | string;
    channel_list?: UpdateSplitChannelStruct[];
}
