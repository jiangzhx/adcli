import type { ConfPageSize500, VideosGetListStruct } from "../models";
export interface VideosGetResponseData {
    list?: VideosGetListStruct[];
    page_info?: ConfPageSize500;
}
