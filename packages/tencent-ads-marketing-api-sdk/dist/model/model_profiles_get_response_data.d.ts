import type { Conf, ProfilesGetListStruct } from "../model/index";
export interface ProfilesGetResponseData {
    list?: ProfilesGetListStruct[];
    page_info?: Conf;
}
