import type { ConfPageSize500, ImagesGetListStruct } from "../models";
export interface ImagesGetResponseData {
    list?: ImagesGetListStruct[];
    page_info?: ConfPageSize500;
}
