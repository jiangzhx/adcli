import type { CursorPageInfoStructLandingPage, PageInfo, PagesGetListStruct } from "../v3/index";
export interface PagesGetResponseData {
    list?: PagesGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfoStructLandingPage;
}
