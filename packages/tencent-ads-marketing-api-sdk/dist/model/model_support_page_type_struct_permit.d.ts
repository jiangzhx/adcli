import type { SupportLinkNameTypePermit, SupportLinkPageTypePermit } from "../model/index";
export interface SupportPageTypeStructPermit {
    page_type?: string;
    description?: string;
    support_link_name_type?: SupportLinkNameTypePermit;
    support_link_page_type?: SupportLinkPageTypePermit;
}
