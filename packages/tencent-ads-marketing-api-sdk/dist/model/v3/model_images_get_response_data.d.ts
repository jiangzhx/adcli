import type { ConfPageSize500, ImagesGetListStruct } from "../v3/index";
export interface ImagesGetResponseData {
    list?: ImagesGetListStruct[];
    page_info?: ConfPageSize500;
}
