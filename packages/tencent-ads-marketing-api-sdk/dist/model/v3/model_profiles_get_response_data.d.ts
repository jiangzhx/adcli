import type { Conf, ProfilesGetListStruct } from "../v3/index";
export interface ProfilesGetResponseData {
    list?: ProfilesGetListStruct[];
    page_info?: Conf;
}
