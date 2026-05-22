import type { ConfPageSize500, VideosGetListStruct } from "../model/index";
export interface VideosGetResponseData {
    list?: VideosGetListStruct[];
    page_info?: ConfPageSize500;
}
