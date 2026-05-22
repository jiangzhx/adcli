import type { Conf, TargetingsGetListStruct } from "../v3/index";
export interface TargetingsGetResponseData {
    list?: TargetingsGetListStruct[];
    page_info?: Conf;
}
