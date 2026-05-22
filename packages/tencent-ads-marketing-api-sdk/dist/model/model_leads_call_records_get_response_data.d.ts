import type { CallListStruct, LeadsWebPageInfoStruct } from "../model/index";
export interface LeadsCallRecordsGetResponseData {
    page_info?: LeadsWebPageInfoStruct;
    request_id?: string;
    entities?: CallListStruct[];
}
