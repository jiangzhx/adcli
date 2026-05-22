import type { Conf, ProductCatalogsGetListStruct } from "../v3/index";
export interface ProductCatalogsGetResponseData {
    list?: ProductCatalogsGetListStruct[];
    page_info?: Conf;
}
