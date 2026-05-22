import type { Conf, ConversionsGetListStruct } from "../model/index";
export interface ConversionsGetResponseData {
    list?: ConversionsGetListStruct[];
    page_info?: Conf;
}
