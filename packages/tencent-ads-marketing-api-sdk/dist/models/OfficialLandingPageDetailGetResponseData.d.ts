import type { PageConfigDetail, PageElement } from "../models";
export interface OfficialLandingPageDetailGetResponseData {
    page_id?: number | string;
    landing_page_id?: number | string;
    page_config?: PageConfigDetail;
    page_elements?: PageElement[];
}
