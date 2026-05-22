import type { ChannelPackageStruct, Conf } from "../v3/index";
export interface AndroidChannelGetResponseData {
    list?: ChannelPackageStruct[];
    page_info?: Conf;
}
