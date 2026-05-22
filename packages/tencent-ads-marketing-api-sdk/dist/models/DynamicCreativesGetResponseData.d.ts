import type { CursorPageInfoStruct, DynamicCreativesGetListStruct, PageInfo } from "../models";
export interface DynamicCreativesGetResponseData {
    list?: DynamicCreativesGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfoStruct;
}
