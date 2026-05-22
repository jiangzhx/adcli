import type { Conf, ProductCatalogsGetListStruct } from "../model/index";
export interface ProductCatalogsGetResponseData {
    list?: ProductCatalogsGetListStruct[];
    page_info?: Conf;
}
