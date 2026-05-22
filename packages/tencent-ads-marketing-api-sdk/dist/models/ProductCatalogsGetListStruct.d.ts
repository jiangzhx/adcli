import type { CatalogStatus, CatalogVertical, DeepLinkEnabled, DpaApiCatalogType, ProductRecommendMethod } from "../models";
export interface ProductCatalogsGetListStruct {
    product_catalog_id?: number | string;
    product_catalog_name?: string;
    product_catalog_type?: DpaApiCatalogType;
    product_catalog_vertical?: CatalogVertical;
    product_catalog_status?: CatalogStatus;
    product_recommend_methods?: ProductRecommendMethod[];
    deep_link_enabled?: DeepLinkEnabled;
}
