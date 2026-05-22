import type { Conf, ProfilesGetListStruct } from "../models";
export interface ProfilesGetResponseData {
    list?: ProfilesGetListStruct[];
    page_info?: Conf;
}
