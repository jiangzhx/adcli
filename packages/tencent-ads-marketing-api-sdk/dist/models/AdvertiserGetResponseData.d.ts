import type { AdvertiserGetListStruct, CursorPageInfo, PageInfo } from "../models";
export interface AdvertiserGetResponseData {
    list?: AdvertiserGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfo;
}
