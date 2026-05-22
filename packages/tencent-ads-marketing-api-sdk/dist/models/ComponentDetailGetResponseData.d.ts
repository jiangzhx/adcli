import type { ComponentDetailGetListStruct, Conf } from "../models";
export interface ComponentDetailGetResponseData {
    list?: ComponentDetailGetListStruct[];
    page_info?: Conf;
}
