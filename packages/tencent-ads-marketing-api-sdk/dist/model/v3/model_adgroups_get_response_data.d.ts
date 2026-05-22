import type { AdgroupsGetListStruct, Conf, CursorPageInfoStruct } from "../v3/index";
export interface AdgroupsGetResponseData {
    list?: AdgroupsGetListStruct[];
    page_info?: Conf;
    cursor_page_info?: CursorPageInfoStruct;
}
