import type { Conf, ConversionsGetListStruct } from "../models";
export interface ConversionsGetResponseData {
    list?: ConversionsGetListStruct[];
    page_info?: Conf;
}
