import type { CustomTagFile, PageInfo } from "../models";
export interface CustomTagFilesGetResponseData {
    list?: CustomTagFile[];
    page_info?: PageInfo;
}
