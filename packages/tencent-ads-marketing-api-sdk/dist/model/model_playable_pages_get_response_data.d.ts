import type { Conf, PlayablePagesGetListStruct } from "../model/index";
export interface PlayablePagesGetResponseData {
    list?: PlayablePagesGetListStruct[];
    page_info?: Conf;
}
