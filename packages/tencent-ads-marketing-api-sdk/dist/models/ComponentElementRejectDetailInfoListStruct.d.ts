import type { RejectInfoLocationListStruct, SiteSetInfoListStruct } from "../models";
export interface ComponentElementRejectDetailInfoListStruct {
    reason?: string;
    site_set_list?: SiteSetInfoListStruct[];
    reject_info_location?: RejectInfoLocationListStruct[];
}
