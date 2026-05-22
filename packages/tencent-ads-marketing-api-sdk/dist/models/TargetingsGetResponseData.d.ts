import type { Conf, TargetingsGetListStruct } from "../models";
export interface TargetingsGetResponseData {
    list?: TargetingsGetListStruct[];
    page_info?: Conf;
}
