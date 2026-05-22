import type { CallListStruct, LeadsWebPageInfoStruct } from "../v3/index";
export interface LeadsCallRecordsGetResponseData {
    page_info?: LeadsWebPageInfoStruct;
    request_id?: string;
    entities?: CallListStruct[];
}
