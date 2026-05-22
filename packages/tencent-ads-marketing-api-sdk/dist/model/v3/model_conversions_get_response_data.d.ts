import type { Conf, ConversionsGetListStruct } from "../v3/index";
export interface ConversionsGetResponseData {
    list?: ConversionsGetListStruct[];
    page_info?: Conf;
}
