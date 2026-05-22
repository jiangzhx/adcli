import type { CallListStruct, LeadsWebPageInfoStruct } from "../models";
export interface LeadsCallRecordsGetResponseData {
    page_info?: LeadsWebPageInfoStruct;
    request_id?: string;
    entities?: CallListStruct[];
}
