import type { AdvertiserGetListStruct, CursorPageInfo, PageInfo } from "../v3/index";
export interface AdvertiserGetResponseData {
    list?: AdvertiserGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfo;
}
