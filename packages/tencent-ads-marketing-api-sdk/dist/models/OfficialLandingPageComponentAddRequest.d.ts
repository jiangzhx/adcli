import type { PageConfigSave, PageElement } from "../models";
export interface OfficialLandingPageComponentAddRequest {
    account_id?: number | string;
    page_config?: PageConfigSave;
    page_elements?: PageElement[];
    proto_version?: number;
}
