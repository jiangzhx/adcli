import type { PlayablePageAuditStatus, PlayablePageDirection } from "../model/index";
export interface PlayablePagesGetListStruct {
    landing_page_id?: string;
    playable_page_id?: string;
    playable_page_material_id?: string;
    playable_page_name?: string;
    playable_page_cdn_base_url?: string;
    playable_page_direction?: PlayablePageDirection;
    audit_status?: PlayablePageAuditStatus;
    audit_msg?: string;
    created_time?: number;
    last_modified_time?: number;
}
