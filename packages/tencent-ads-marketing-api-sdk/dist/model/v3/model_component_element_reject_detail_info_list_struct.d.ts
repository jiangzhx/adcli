import type { RejectInfoLocationListStruct, SiteSetInfoListStruct } from "../v3/index";
export interface ComponentElementRejectDetailInfoListStruct {
    reason?: string;
    site_set_list?: SiteSetInfoListStruct[];
    reject_info_location?: RejectInfoLocationListStruct[];
}
