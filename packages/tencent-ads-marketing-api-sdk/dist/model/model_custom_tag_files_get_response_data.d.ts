import type { CustomTagFile, PageInfo } from "../model/index";
export interface CustomTagFilesGetResponseData {
    list?: CustomTagFile[];
    page_info?: PageInfo;
}
