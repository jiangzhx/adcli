import type { Conf, PagesGetListStruct } from "../model/index";
export interface PagesGetResponseData {
    list?: PagesGetListStruct[];
    page_info?: Conf;
}
