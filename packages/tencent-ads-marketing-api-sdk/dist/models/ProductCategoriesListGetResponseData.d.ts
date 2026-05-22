import type { CategoryItem, Conf } from "../models";
export interface ProductCategoriesListGetResponseData {
    list?: CategoryItem[];
    page_info?: Conf;
}
