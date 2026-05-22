import type { Conf, LeadCluesGetListStruct } from "../models";
export interface LeadCluesGetResponseData {
    leads_info?: LeadCluesGetListStruct[];
    page_info?: Conf;
}
