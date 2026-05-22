import type { CategoryItem, Conf } from "../model/index";
export interface ProductCategoriesListGetResponseData {
    list?: CategoryItem[];
    page_info?: Conf;
}
