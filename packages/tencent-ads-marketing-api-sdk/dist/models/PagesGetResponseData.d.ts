import type { CursorPageInfoStructLandingPage, PageInfo, PagesGetListStruct } from "../models";
export interface PagesGetResponseData {
    list?: PagesGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfoStructLandingPage;
}
