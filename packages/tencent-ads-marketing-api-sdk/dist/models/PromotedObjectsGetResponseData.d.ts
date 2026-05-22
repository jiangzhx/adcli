import type { Conf, PromotedObjectsGetListStruct } from "../models";
export interface PromotedObjectsGetResponseData {
    list?: PromotedObjectsGetListStruct[];
    page_info?: Conf;
}
