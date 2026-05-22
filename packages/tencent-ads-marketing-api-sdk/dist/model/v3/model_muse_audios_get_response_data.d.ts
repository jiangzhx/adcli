import type { AudioListStruct, ConfPageSize500 } from "../v3/index";
export interface MuseAudiosGetResponseData {
    list?: AudioListStruct[];
    page_info?: ConfPageSize500;
}
