import type { AudioListStruct, ConfPageSize500 } from "../models";
export interface MuseAudiosGetResponseData {
    list?: AudioListStruct[];
    page_info?: ConfPageSize500;
}
