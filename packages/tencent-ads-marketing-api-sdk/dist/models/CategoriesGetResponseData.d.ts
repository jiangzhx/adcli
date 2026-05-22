import type { CategoryItem, Conf } from "../models";
export interface CategoriesGetResponseData {
    list?: CategoryItem[];
    page_info?: Conf;
}
