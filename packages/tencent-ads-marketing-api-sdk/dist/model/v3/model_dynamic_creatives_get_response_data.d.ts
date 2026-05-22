import type { CursorPageInfoStruct, DynamicCreativesGetListStruct, PageInfo } from "../v3/index";
export interface DynamicCreativesGetResponseData {
    list?: DynamicCreativesGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfoStruct;
}
