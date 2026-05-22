import type { Conf, PlayablePagesGetListStruct } from "../models";
export interface PlayablePagesGetResponseData {
    list?: PlayablePagesGetListStruct[];
    page_info?: Conf;
}
