import type { ElementRejectDetailInfoListStruct, ReviewResultStatus, SiteSetDefinition } from "../v3/index";
export interface SiteSetResultListStruct {
    site_set?: SiteSetDefinition;
    system_status?: ReviewResultStatus;
    reject_message?: string;
    element_reject_detail_info?: ElementRejectDetailInfoListStruct[];
}
