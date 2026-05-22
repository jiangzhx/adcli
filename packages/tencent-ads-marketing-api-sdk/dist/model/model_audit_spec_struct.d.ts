import type { AdStatus, ElementRejectDetailInfo, SiteSetDefinition } from "../model/index";
export interface AuditSpecStruct {
    site_set?: SiteSetDefinition;
    system_status?: AdStatus;
    reject_message?: string;
    element_reject_detail_info?: ElementRejectDetailInfo[];
}
