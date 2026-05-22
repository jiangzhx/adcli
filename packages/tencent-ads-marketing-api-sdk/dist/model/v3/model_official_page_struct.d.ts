import type { OfficialPageStatus, OfficialPageType } from "../v3/index";
export interface OfficialPageStruct {
    page_id?: number | string;
    landing_page_id?: number | string;
    page_name?: string;
    page_title?: string;
    page_type?: OfficialPageType;
    page_status?: OfficialPageStatus;
}
