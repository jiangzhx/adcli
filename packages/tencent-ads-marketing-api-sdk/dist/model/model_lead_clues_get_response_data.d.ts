import type { Conf, LeadCluesGetListStruct } from "../model/index";
export interface LeadCluesGetResponseData {
    leads_info?: LeadCluesGetListStruct[];
    page_info?: Conf;
}
