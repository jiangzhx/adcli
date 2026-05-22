import type { CategoryItem, Conf } from "../v3/index";
export interface ProductCategoriesListGetResponseData {
    list?: CategoryItem[];
    page_info?: Conf;
}
