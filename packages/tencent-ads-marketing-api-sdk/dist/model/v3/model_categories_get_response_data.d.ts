import type { CategoryItem, Conf } from "../v3/index";
export interface CategoriesGetResponseData {
    list?: CategoryItem[];
    page_info?: Conf;
}
