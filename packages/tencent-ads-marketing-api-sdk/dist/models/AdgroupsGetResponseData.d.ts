import type { AdgroupsGetListStruct, Conf, CursorPageInfoStruct } from "../models";
export interface AdgroupsGetResponseData {
    list?: AdgroupsGetListStruct[];
    page_info?: Conf;
    cursor_page_info?: CursorPageInfoStruct;
}
