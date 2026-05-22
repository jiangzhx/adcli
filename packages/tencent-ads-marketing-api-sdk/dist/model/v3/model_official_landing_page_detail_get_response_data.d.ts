import type { PageConfigDetail, PageElement } from "../v3/index";
export interface OfficialLandingPageDetailGetResponseData {
    page_id?: number | string;
    landing_page_id?: number | string;
    page_config?: PageConfigDetail;
    page_elements?: PageElement[];
}
