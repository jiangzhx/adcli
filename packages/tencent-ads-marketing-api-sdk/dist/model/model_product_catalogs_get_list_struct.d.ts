import type { CatalogStatus, CatalogType, CatalogVertical, DeepLinkEnabled, RecommendMethod } from "../model/index";
export interface ProductCatalogsGetListStruct {
    product_catalog_id?: number | string;
    product_catalog_name?: string;
    product_catalog_type?: CatalogType;
    product_catalog_vertical?: CatalogVertical;
    product_catalog_status?: CatalogStatus;
    product_recommend_methods?: RecommendMethod[];
    deep_link_enabled?: DeepLinkEnabled;
}
