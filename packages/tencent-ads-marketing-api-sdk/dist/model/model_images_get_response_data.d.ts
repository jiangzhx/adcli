import type { ConfPageSize500, ImagesGetListStruct } from "../model/index";
export interface ImagesGetResponseData {
    list?: ImagesGetListStruct[];
    page_info?: ConfPageSize500;
}
