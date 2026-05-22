import type { ChannelPackageStruct, Conf } from "../models";
export interface AndroidChannelGetResponseData {
    list?: ChannelPackageStruct[];
    page_info?: Conf;
}
