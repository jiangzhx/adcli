import type { Conf, PromotedObjectsGetListStruct } from "../model/index";
export interface PromotedObjectsGetResponseData {
    list?: PromotedObjectsGetListStruct[];
    page_info?: Conf;
}
