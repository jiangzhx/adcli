import type { ConfPageSize500, VideosGetListStruct } from "../v3/index";
export interface VideosGetResponseData {
    list?: VideosGetListStruct[];
    page_info?: ConfPageSize500;
}
